let addBtn = document.getElementById('addbtn');
        addBtn.addEventListener('click', function () {
            const divEle = document.querySelector('#statusBox');
            const pEle = document.createElement('p');
            const btnEle = document.createElement('button');
            const name = document.querySelector('.name>input');
            const age = document.querySelector('.age>input');
            const job = document.querySelector('.job>input');
            btnEle.textContent = '삭제';
            pEle.textContent = name.value + ' (' + age.value + '세) ' + job.value;
            name.value = null
            age.value = null
            job.value = null
            pEle.appendChild(btnEle);
            divEle.appendChild(pEle);
            btnEle.addEventListener('click',() =>{
                pEle.remove();
            })
        });