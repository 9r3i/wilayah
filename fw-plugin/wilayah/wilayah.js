/**
 * wilayah.js
 * ~ a Force plugin for managing wilayah content
 * started at january 14th 2023
 * @requires ForceWebsite
 */
;function wilayah(param){
this.version='1.0.0';
this.pattern=/(:wilayah:)/g;
this.host=param.host;
this.Force=null;
const _wilayah=this;
this.build=ForceWebsite.buildElement;
this.init=function(plug){
  this.Force=plug.Force;
  if(ForceWebsite.query.hasOwnProperty('p')){
    ForceWebsite.onContentReady((r,i)=>{
      if(!r||!_wilayah.pattern.test(r.innerHTML)){return;}
      let cd=_wilayah.convert(r.innerHTML);
      r.innerHTML=cd;
    });
  }
};
this.convert=function(s){
  return s.replace(this.pattern,m=>{
    let sel=_wilayah.select('index');
    return sel.outerHTML;
  });
};
this.getResult=function(value){
  let res=[];
  for(let i of [1,2,3,4]){
    let val=false;
    if(value){
      val=this.getOptionValue(i);
    }else{
      val=this.getOptionText(i);
    }
    if(val){
      res.push(val);
    }
  }return res;
};
this.getOptionValue=function(level){
  let el=document.getElementById('wilayah-level-'+level);
  return el?el.selectedIndex:false;
};
this.getOptionText=function(level){
  let el=document.getElementById('wilayah-level-'+level);
  return el?el.options[el.selectedIndex].text:false;
};
this.putOptions=function(id,data,hi){
  const el=document.getElementById(id);
  if(!el){return false;}
  for(let i in data){
    this.build('option',data[i],{
      value:i,
    }).appendTo(el);
  }
  el.onchange=function(e){
    let val=this.value,
    parent=this.parentNode;
    if(this.dataset.level==1){
      let path=val+'/index',
      sel=_wilayah.select(path,2),
      old=document.getElementById(sel.id),
      old3=document.getElementById('wilayah-level-'+3),
      old4=document.getElementById('wilayah-level-'+4);
      if(old){
        old.parentNode.removeChild(old);
      }sel.appendTo(parent);
      if(old3){
        old3.parentNode.removeChild(old3);
      }
      if(old4){
        old4.parentNode.removeChild(old4);
      }
    }else if(this.dataset.level==2){
      let spath=this.dataset.path.split('/'),
      path=spath[0]+'/'+val+'/index',
      sel=_wilayah.select(path,3),
      old=document.getElementById(sel.id),
      old4=document.getElementById('wilayah-level-'+4);
      if(old){
        old.parentNode.removeChild(old);
      }sel.appendTo(parent);
      if(old4){
        old4.parentNode.removeChild(old4);
      }
    }else if(this.dataset.level==3){
      let spath=this.dataset.path.split('/'),
      path=spath[0]+'/'+spath[1]+'/'+val,
      sel=_wilayah.select(path,4),
      old=document.getElementById(sel.id);
      if(old){
        old.parentNode.removeChild(old);
      }sel.appendTo(parent);
    }
    let res=_wilayah.getResult(),
    resid='wilayah-select-result',
    rel=document.getElementById(resid);
    if(res.length==4){
      res[3]=res[1].trim().match(/^kota/i)
        ?'Kelurahan '+res[3]
        :'Desa '+res[3];
    }
    if(!rel){
      rel=_wilayah.build('div',null,{
        'class':'wilayah-select-result',
        id:resid,
      });
      parent.insertBefore(rel,parent.firstChild);
    }rel.innerHTML=res.reverse().join(', ');
  };
  return true;
};
this.select=function(path,hi){
  hi=hi?hi:1;
  let holders=[
    '--Pilih--',
    '--Provinsi--',
    '--Kabupaten/Kota--',
    '--Kecamatan--',
    '--Kelurahan/Desa--',
  ],
  holder=holders.hasOwnProperty(hi)?holders[hi]:holders[0],
  id='wilayah-level-'+hi,
  ls=this.fetch(path,r=>{
    return _wilayah.putOptions(id,r,hi);
  }),
  sel=this.build('select',null,{
      'class':'wilayah-select',
      id:id,
  },[
    _wilayah.build('option',holder,{
      value:'0'
    })
  ]);
  sel.dataset.path=path;
  sel.dataset.level=hi;
  return sel;
};
this.fetch=function(s,cb){
  if(typeof s!=='string'){return false;}
  cb=typeof cb==='function'?cb:function(){};
  let url=this.host+s+'.json';
  return fetch(url).then(r=>r.json()).then(cb);
};
};
