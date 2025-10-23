
        let colorInput = document.querySelector('#color');
        colorInput.addEventListener('input', () => {
            let colorcode = document.querySelector('#color').value;
            document.getElementsByTagName('body')[0].style.backgroundColor = colorcode;
            document.getElementsByTagName('label')[0].style.backgroundcolor = colorcode;
        })


        