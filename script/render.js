function renderAccordion(groupKey) {
    const container = document.getElementById('accordion-color');
    if (!container) return;

    container.innerHTML = '';
    const data = pyqData[groupKey];
    if (!data) return;

    data.forEach((yearData, index) => {
        const i = index + 1;
        const expanded = yearData.isOpen ? "true" : "false";
        const bodyClass = yearData.isOpen ? "" : "hidden";

        let borderClass = "border border-gray-200 dark:border-gray-700";
        if (index === 0) borderClass += " border-b-0 rounded-t-xl";
        else if (index < data.length - 1) borderClass += " border-b-0";

        let textClass = yearData.isOpen ? "text-gray-900 dark:text-white" : "text-gray-500";

        const headingHTML = `
            <h2 id="accordion-color-heading-${i}">
                <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right ${borderClass} ${textClass} focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3"
                    data-accordion-target="#accordion-color-body-${i}" aria-expanded="${expanded}"
                    aria-controls="accordion-color-body-${i}">
                    <span class="dark:text-white">${yearData.year}</span>
                    <svg data-accordion-icon class="w-3 h-3 ${yearData.isOpen ? 'rotate-180' : ''} shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
        `;

        let bodyContentHTML = '';
        if (yearData.isSpecial) {
            bodyContentHTML = `
                <div class="p-5 border ${index === data.length - 1 ? '' : 'border-b-0'} border-gray-200 dark:border-gray-700">
                    ${yearData.warning ? `
                    <time class="block mb-3 text-sm font-normal leading-none"><span
                            class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-1 py-0.5 rounded dark:bg-blue-900 dark:text-gray-200">${yearData.warning}</span></time>
                    ` : ''}
                    ${yearData.links.map(link => `
                        <a href="${link.url}"
                            class="inline-flex mb-3 mr-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-18 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-800 focus:text-blue-700"><svg
                                class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path
                                    d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>${link.label}</a>
                    `).join('')}
                </div>
            `;
        } else {
            const styleAttr = yearData.styleHeight ? `style="height: ${yearData.styleHeight};"` : '';
            bodyContentHTML = `
                <div class="p-4 border ${index === data.length - 1 ? '' : 'border-b-0'} border-gray-200 dark:border-gray-700 dark:bg-gray-900 overflow-y-auto" ${styleAttr}>
                    <ol class="relative border-s border-gray-300 dark:border-blue-800">
                        ${yearData.categories.map((cat, catIndex) => `
                            <li class="${catIndex === yearData.categories.length - 1 ? 'mb-3' : 'mb-10'} ms-6">
                                <span
                                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg class="w-5 h-5 text-blue-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z" />
                                    </svg>
                                </span>
                                <h3 class="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                                    ${cat.title}
                                    ${cat.badges && cat.badges.length ? cat.badges.map(b => `<span class="bg-blue-100 rounded-full text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-gray-200 ms-3">${b}</span>`).join('') : ''}
                                </h3>
                                ${cat.description ? `<time class="block mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${cat.description}</time>` : ''}
                                
                                ${cat.links.map(link => `
                                    ${link.time ? `<time class="block mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${link.time}</time>` : (cat.description ? '' : `<time class="block mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>`)}
                                    <a href="${link.url}"
                                        class="inline-flex mb-3 mr-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-18 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-800 focus:text-blue-700"><svg
                                            class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                            <path
                                                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                        </svg>${link.label}</a>
                                `).join('')}
                            </li>
                        `).join('')}
                    </ol>
                </div>
            `;
        }

        const bodyHTML = `
            <div id="accordion-color-body-${i}" class="${bodyClass}" aria-labelledby="accordion-color-heading-${i}">
                ${bodyContentHTML}
            </div>
        `;

        container.innerHTML += headingHTML + bodyHTML;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('accordion-color');
    if (container && container.dataset.group) {
        renderAccordion(container.dataset.group);
    }
});
