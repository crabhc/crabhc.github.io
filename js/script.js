$('#p05-hover').hover(function () {
        $('#i05-hover').show();
    },
    function () {
        $('#i05-hover').hide();
    })

$('#p05-hover').click(function () {
    $('#player03').animate({
        opacity: '0'
    });
    $('#player04').animate({
        opacity: '0'
    });
    $('#p04-hover').hide();
    $('#player05').animate({
        opacity: '0'
    });
    $('#i05-hover').hide();
    $('#p05-hover').hide();
    $('#panel_3').animate({
        height: '300px',
        width: '600px',
        marginBottom: '0',
        border: '0'
    });
    $('#panel_4').animate({
        height: '300px',
        width: '300px',
        marginRight: '0',
        border: '0'
    });
    $('#panel_5').animate({
        height: '300px',
        width: '300px',
        marginLeft: '0',
        border: '0',
    });
})




$('#panel_6').click(function () {
    $('#p001').show()

    $('#e_m1-2_3-4').animate({
        opacity: '0'
    })

    $('#e_m1-3_2-4').animate({
        opacity: '0'
    })
})

$('#panel_7').click(function () {
    $('#p002').animate({
        opacity: '100'
    })

    $('#panel_2').animate({
        height: '800px'
    })
})


const panel3 = document.querySelector('#panel_3');
const panel4 = document.querySelector('#panel_4');

const panelOptions = {
    rootMargin: "-50% 0px -50% 0px"
};

const panel3Observer = new IntersectionObserver(function (entries, panelObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            $('#player03').animate({
                opacity: '0'
            });
        } else {
            $('#player03').animate({
                opacity: '1'
            });
        }
    });
}, panelOptions);

panel3Observer.observe(panel3);

const panel4Observer = new IntersectionObserver(function (entries, panelObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            $('#player04').animate({
                opacity: '0'
            });
        } else {
            $('#player04').animate({
                opacity: '1'
            });
        }
    });
}, panelOptions);

panel4Observer.observe(panel4);
