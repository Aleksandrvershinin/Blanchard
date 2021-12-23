document.addEventListener('DOMContentLoaded', function () {
    const itemClosed = document.querySelectorAll('.inform-box-content-item-closed');
    const listItem = document.querySelectorAll('.inform-box-content-link');

    listItem.forEach((e, i) => {
        listItem[i].addEventListener('click', () => {
            itemClosed[i].classList.toggle('inform-box-content-item-is-open');
        });
        document.addEventListener('click', (el) => {
            if (el.target !== listItem[i]) {
                itemClosed[i].classList.remove('inform-box-content-item-is-open');
            }
        });
    });

    languageIconIndex = [];
    const catalogDescription = document.querySelector('.catalog-description');
    const language = document.querySelectorAll('.language');
    const languageIcon = document.querySelectorAll('.language-icon');
    for (let i = 0; i < languageIcon.length; i++) {
        languageIconIndex.push(languageIcon[i]);
        languageIcon[i].addEventListener('click', function (e) {
            let t = languageIconIndex.indexOf(e.target);
            for (let i = 0; i < languageIcon.length; i++) {
                language[i].classList.remove('language-is-active');
            }
            language[t].classList.add('language-is-active');
            if (t == 0) {
                catalogDescription.textContent = `Les actionnaires des plus grandes entreprises, qui représentent un exemple frappant de la culture politique de type continental-européen, seront déclarés contraires aux normes universelles d'éthique et de moralité. Ne faisant qu'une partie de l'image globale, cherchant à supplanter la fabrication traditionnelle, la nanotechnologie reste à ce jour le lot des libéraux qui aspirent à être fonctionnellement séparés en éléments indépendants.`
            }
            else if (t == 1) {
                catalogDescription.textContent = `Die Aktionäre der größten Unternehmen, die ein Paradebeispiel der kontinentaleuropäischen Art der politischen Kultur darstellen, werden erklärt, die universellen Normen der Ethik und Moral zu verletzen. Als Teil des Gesamtbildes, das die traditionelle Produktion verdrängen will, bleibt die Nanotechnologie bis heute ein Teil der Liberalen, die sich danach sehnen, funktional in unabhängige Elemente aufgeteilt zu werden.`
            }
            else if (t == 2) {
                catalogDescription.textContent = `Gli azionisti delle maggiori società, che rappresentano un chiaro esempio del tipo di cultura politica continentale-europea, saranno dichiarati in violazione delle norme universali di etica e moralità. Essendo solo una parte del quadro generale che cerca di soppiantare la produzione tradizionale, le nanotecnologie rimangono fino ad oggi un destino di liberali che bramano di essere distanziati funzionalmente in elementi indipendenti.`
            }
            else if (t == 3) {
                catalogDescription.textContent = `Акционеры крупнейших компаний, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии и по сей день остаются уделом либералов, которые жаждут быть функционально разнесены на независимые элементы.`
            }
            else if (t == 4) {
                catalogDescription.textContent = `Die Aktionäre der größten Unternehmen, die ein Paradebeispiel der kontinentaleuropäischen Art der politischen Kultur darstellen, werden erklärt, die universellen Normen der Ethik und Moral zu verletzen. Als Teil des Gesamtbildes, das die traditionelle Produktion verdrängen will, bleibt die Nanotechnologie bis heute ein Teil der Liberalen, die sich danach sehnen, funktional in unabhängige Elemente aufgeteilt zu werden.`
            }
        });
    };

    painterElement = [];
    const painter = document.querySelectorAll('.catalog-right-description-box ul li a');
    const catalogNamePainter = document.querySelector('.catalog-name-painter');
    painter.forEach(e => {
        painterElement.push(e);
        e.addEventListener('click', (el) => {
            let i = painterElement.indexOf(el.target);
            catalogNamePainter.textContent = painter[i].textContent;
            painter.forEach(element => {
                element.classList.remove('color')
            })
            painter[i].classList.add('color')
        })
    })
    const eventsBtn = document.querySelector('.events-btn');
    const eventsItem = document.querySelectorAll('.events-item');
    eventsBtn.addEventListener('click', () => {
        for (i = 3; i < eventsItem.length; i++) {
            eventsItem[i].classList.remove('hide');
            eventsBtn.classList.add('hide');
        }
    })
    const publicationsPriceInput = document.querySelectorAll('.publications-price input');
    publicationsPriceInput.forEach(e => {
        e.addEventListener('input', () => {
            e.value = e.value.replace(/[^\d]/gi, '');
            if (e.value.length > 3) {
                let count = e.value.length - 3;
                e.value = e.value.substr(0, count) + ' ' + e.value.substr(count);
            };
            if (e.value.length > 7) {
                let count = e.value.length - 7;
                e.value = e.value.substr(0, count) + ' ' + e.value.substr(count);
            };
        })
    })
});







