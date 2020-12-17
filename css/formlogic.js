(function () {

    window.addEventListener('load', () => {
        document.getElementById('check1').addEventListener('click', sprawdzCalosc);


    } )

    function sprawdzCalosc () {
        var inputy = szukajElementow('input');
        inputy.forEach( (el) => {
            console.log(el);
            sprawdzElement(el);
        })
    }

    function szukajElementow(query) {
        return document.querySelectorAll(query);
    }

    function sprawdzElement(el) {
        switch (el.getAttribute("name")) {
            case 'imie':
                validateName(el);
                break;
            case 'data':
                validateDate(el);
                break;
            default:
                break;
        }
    }

    function validateName(el) {
        var regex = /([A-Z]+)/gi;
        var wartosc = el.value;
        if (!wartosc.match(regex)) {
            el.classList.add('error');
        } else {
            el.classList.remove('error');
        }
    }

    function validateDate(el) {
        var regex = /([0-9\-]+)/gi;
        var wartosc = el.value;
        if (!wartosc.match(regex)) {
            el.classList.add('error');
        } else {
            el.classList.remove('error');
        }
    }





})();

