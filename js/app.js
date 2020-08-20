var slide = () => {
    var nav = document.querySelector('.navs');
    var  burgers = document.querySelector('.burger');
    var navlinks=document.querySelectorAll('.navs a')
    var mains=document.querySelector('#main')

    burgers.addEventListener('click',  () => {
        nav.classList.toggle('nav-active');
        mains.classList.toggle('mainsmove');

        navlinks.forEach((link,index) => {
            if(link.style.animation)
            {
                link.style.animation='';
            }
            else
            { 
           
              link.style.animation=`navlinkslide 0.4s ease forwards ${index/7 + 0.5}s`;

            }
            
        });
    });

    
}
slide();