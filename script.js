// Simple tab logic and theme toggle
(function(){
  const tabs=document.querySelectorAll('.tab');
  const panels=document.querySelectorAll('.tabpanel');
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    panels.forEach(p=>p.style.display='none');
    const id=t.dataset.tab; document.getElementById(id).style.display='block';
  }));
  // initial state
  document.getElementById('tab1').style.display='block';
  // form demo
  const form=document.getElementById('contactForm');
  const note=document.getElementById('formNote');
  form.addEventListener('submit',e=>{e.preventDefault();
    if(!form.checkValidity()){note.textContent='Please complete all fields.';return}
    const data=new FormData(form);const name=data.get('name');const email=data.get('email');
    note.textContent='Thanks '+name+'! We will respond to '+email+'.';form.reset();
  });
})();
