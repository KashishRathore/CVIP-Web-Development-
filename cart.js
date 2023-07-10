var noti = document.querySelector('h2');
var select = document.querySelector('.select');
var button = document.getElementsByClassName('cart-btn');

for (but of button) {
    but.addEventListener('click', (e) => {
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');


        //copy and paste element

        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-Now ";
        if (clone) {
            noti.onclick = () => {
                select.classList.toggle('display')
            }
        }
        clone.lastElementChild.innerHTML = ' <a href = "buy.html" style="text-decoration:none;color:#f7f7f7;"><b>Buy-Now</b></a>';
     
    })
 
}


