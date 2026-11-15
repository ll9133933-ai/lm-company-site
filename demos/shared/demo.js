/* Utilitários compartilhados das demonstrações da LM Company */
(function(){
  const WA = (window.LM_CONFIG && window.LM_CONFIG.whatsapp) || "5521998472010";
  const css=`.lm-badge{position:fixed;left:14px;bottom:max(14px,env(safe-area-inset-bottom));z-index:90;display:flex;align-items:center;gap:10px;padding:7px 14px 7px 7px;border-radius:999px;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#1B1530;font:500 12.5px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;box-shadow:0 12px 32px -12px rgba(46,16,101,.45),inset 0 0 0 1px rgba(124,58,237,.18);transition:transform 160ms cubic-bezier(.23,1,.32,1)}
.lm-badge:active{transform:scale(.97)}.lm-badge i{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:#7C3AED}.lm-badge img{width:20px}.lm-badge b{font-weight:600}.lm-badge small{display:block;color:#6B6485;font-size:11px}
.lm-toast{position:fixed;left:50%;bottom:84px;z-index:95;width:min(92vw,420px);background:#1B1530;color:#fff;border-radius:16px;padding:14px 18px;font:400 14px/1.5 system-ui,-apple-system,sans-serif;box-shadow:0 30px 60px -20px rgba(0,0,0,.5);transform:translate(-50%,16px);opacity:0;pointer-events:none;transition:transform 300ms cubic-bezier(.23,1,.32,1),opacity 200ms ease}
.lm-toast.show{transform:translate(-50%,0);opacity:1}
.rv{opacity:0;transform:translateY(22px);transition:opacity .8s cubic-bezier(.23,1,.32,1),transform .9s cubic-bezier(.23,1,.32,1)}.rv.rv-in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const isPreview=location.hash==='#preview';
  /* Sempre abrir a demo no topo, mesmo vindo do meio do site da LM */
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  const toTop=()=>{ if(location.hash && location.hash!=='#preview') return; window.scrollTo(0,0); document.documentElement.scrollTop=0; document.body && (document.body.scrollTop=0); };
  toTop(); addEventListener('DOMContentLoaded',toTop); addEventListener('load',()=>{toTop();setTimeout(toTop,60)}); addEventListener('pageshow',toTop);
  if(isPreview) document.documentElement.classList.add('is-preview');
  addEventListener('DOMContentLoaded',()=>{
    if(!isPreview){const a=document.createElement('a');a.className='lm-badge';a.href='../../index.html#projetos';a.innerHTML='<i><img src="../../assets/logo.svg" alt=""></i><span><b>Voltar ao site da LM</b><small>Projeto conceito · LM Company</small></span>';document.body.appendChild(a);}
    const t=document.createElement('div');t.className='lm-toast';t.setAttribute('role','status');document.body.appendChild(t);window.__lmToast=t;
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('rv-in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.rv').forEach(el=>{ if(isPreview) el.classList.add('rv-in'); else io.observe(el)});
  });
  let tm;
  window.lmToast=function(msg){const t=window.__lmToast;if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(tm);tm=setTimeout(()=>t.classList.remove('show'),3200)};
  /* Abre o WhatsApp com a mensagem pronta. */
  window.demoWa=function(msg){
    const a=document.createElement('a');a.href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;a.target='_blank';a.rel='noopener';
    document.body.appendChild(a);a.click();a.remove();
    window.lmToast('Abrindo o WhatsApp com a sua mensagem…');
  };
  window.brl=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
})();
