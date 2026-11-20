document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('doc');
    const gallery = document.getElementById('image-gallery');
    const displayTitle = document.getElementById('document-display-title');
    const noDocsMessage = document.getElementById('no-docs-message');

    // Mapping of URL parameter to Display Title and Image Prefixes
    // This allows us to handle documents that might have multiple images
    const docMapping = {
        'affiliation': {
            title: 'Affiliation / Up Gadration Letters',
            prefix: 'affilatted',
            count: 3
        },
        'societies': {
            title: 'Society / Trust Registration Certificates',
            prefix: 'society',
            count: 5
        },
        'noc': {
            title: 'No Objection Certificate (NOC)',
            prefix: 'state',
            count: 2
        },
        'recognition': {
            title: 'Recognition Certificate (RTE Act)',
            prefix: 'recognition',
            count: 4
        },
        'safety': {
            title: 'Building Safety Certificate',
            prefix: 'safety',
            count: 1
        },
        'fire': {
            title: 'Fire Safety Certificate',
            prefix: 'fire',
            count: 6
        },
        'deo': {
            title: 'DEO Certificate',
            prefix: 'structural',
            count: 1
        },
        'sanitary': {
            title: 'Water, Health and Sanitation Certificates',
            prefix: 'sanitary',
            count: 1
        },
        'fees': {
            title: 'Fee Structure of the School',
            prefix: 'fees',
            count: 1
        },
        'calendar': {
            title: 'Annual Academic Calendar',
            prefix: 'calendar',
            count: 13
        },
        'smc': {
            title: 'List of School Management Committee (SMC)',
            prefix: 'smc',
            count: 1
        },
        'pta': {
            title: 'List of Parents Teachers Association (PTA)',
            prefix: 'pta',
            count: 1
        },
        'result': {
            title: 'Three-Year Result of Board Examination',
            prefix: 'result',
            count: 1
        },
        'staff': {
            title: 'Staff Details (2025-26)',
            prefix: 'staff',
            count: 2
        },
        'saras': {
            title: 'Mandatory Disclosure Details (SARAS 7)',
            prefix: 'saras',
            count: 6
        }

    };

    if (docId && docMapping[docId]) {
        const config = docMapping[docId];
        displayTitle.textContent = config.title;
        document.title = config.title + " - Sankalp School";

        let imagesLoaded = 0;

        // Generate gallery items based on prefix and count
        // Note: We check filenames like prefix1.jpg, prefix2.jpg etc.
        // For single items, it might just be prefix.jpg
        for (let i = 1; i <= config.count; i++) {
            const fileName = config.count === 1 ? `${config.prefix}.jpg` : `${config.prefix}${i}.jpg`;
            const filePath = `img/doc-imgs/${fileName}`;

            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = filePath;
            img.alt = config.title;

            // Basic error handling for missing images
            img.onerror = function () {
                galleryItem.style.display = 'none';
            };

            img.onload = function () {
                imagesLoaded++;
            };

            galleryItem.appendChild(img);
            gallery.appendChild(galleryItem);
        }

        // If after a short delay no images are visible, show "not found"
        setTimeout(() => {
            const visibleItems = gallery.querySelectorAll('.gallery-item[style*="display: none"]');
            if (gallery.children.length === visibleItems.length) {
                noDocsMessage.style.display = 'block';
            }
        }, 500);

    } else {
        displayTitle.textContent = 'Document Not Found';
        noDocsMessage.style.display = 'block';
    }
});
