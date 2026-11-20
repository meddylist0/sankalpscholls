$files = Get-ChildItem -Path *.html -Exclude "header.html", "footer.html"
$cssLink = '    <link rel="stylesheet" href="css/mobile-menu.css">'
$headerPlaceholder = '    <div id="header"></div>'

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw
    
    # 1. Inject CSS Link if missing
    if ($content -notmatch 'css/mobile-menu.css') {
        # Try to insert before style.css link
        if ($content -match '<link rel="stylesheet" href="style.css">') {
            $content = $content.Replace('<link rel="stylesheet" href="style.css">', "$cssLink`r`n    <link rel=`"stylesheet`" href=`"style.css`">")
        } else {
            # Otherwise insert before </head>
            $content = $content.Replace('</head>', "$cssLink`r`n</head>")
        }
    }

    # 2. Standardize Header
    # If legacy <header> exists, replace it
    if ($content -match '<header[^>]*>.*?</header>') {
        # Use regex to find and replace the entire header block
        $content = [regex]::Replace($content, '<!--Header Area Start-->\s*<header[^>]*>.*?</header>\s*<!--End of Header Area-->', "<!--Header Area Start-->`r`n$headerPlaceholder`r`n    <!--End of Header Area-->", "Singleline")
        # Backup if comments are different
        if ($content -match '<header') {
            $content = [regex]::Replace($content, '<header[^>]*>.*?</header>', $headerPlaceholder, "Singleline")
        }
    }
    
    # If no header placeholder at all (and no legacy header left), insert after <body>
    if ($content -notmatch '<div id="header"></div>') {
        $content = $content.Replace('<body>', "<body>`r`n    <!--Header Area Start-->`r`n$headerPlaceholder`r`n    <!--End of Header Area-->")
    }

    $content | Set-Content -Path $file.FullName -NoNewline
}
Write-Host "Done!"
