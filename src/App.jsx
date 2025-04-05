import { useEffect, useState } from 'react'

const fromInput = document.getElementById('fromInput');

export default function App() {
 
 const [opsi,setOpsi] = useState([]);
 const [fromOpsi,setFromOpsi] = useState('');
 const [toOpsi,setToOpsi] = useState('');
const [fromValue,setFromValue] = useState('');
const [toValue,setToValue] = useState('');

const numberFromat = new Intl.NumberFormat('id-ID',{maximumFractionDigits:20});

const satuanVolumeLiter = {
  kl:'kiloliter',
  l:'liter',

  hl:'hektoliter',
  dal:'dekaliter',
  dl:'desiliter',
  cl:'centiliter',
  ml:'mililiter'
}




const satuanBerat = {
  kg:'kilogram',
  g:'gram',
  ton:'ton',
  hg:'hektogram',
  dag:'dekagram',
  dg:'desigram',
  cg:'centigram',
  mg:'miligram'
}

const satuanPanjang = {
  km:'kilometer',
  m:'meter',
  hm:"hektometer",
  dam:'dekameter',
  dm:'desimeter',
  cm:'centimeter',
  mm:"milimeter"
}

useEffect(()=>{
  setFromOpsi('kg');
  setToOpsi('kg')
  setOpsi(satuanBerat);
},[])



function handleSelect(e){




  setToValue(0);

if(e.target.id == 'sel1'){
  setFromOpsi(e.target.value);

}else{
  setToOpsi(e.target.value);
}
}


function handleOpsi(e){

 document.getElementById('fromInput').value='';
setToValue(0);

  if(e.target.value == 'panjang'){
    setFromOpsi('km');
    setToOpsi('km')
setOpsi(satuanPanjang)
  }
  if(e.target.value == 'berat'){
    setFromOpsi('kg')
    setToOpsi('kg')
    setOpsi(satuanBerat)
  }
if(e.target.value == 'volumeLiter'){
    setFromOpsi('kl');
     setToOpsi('kl');
     setOpsi(satuanVolumeLiter);
}
}

function handleKonversi(){
  let hasil = 1;

//console.log(fromOpsi);
//console.log(toOpsi)
  if(fromOpsi == toOpsi){
    setToValue(fromValue*hasil)
  }
  else if(fromOpsi == 'kg' || fromOpsi == 'km' || fromOpsi == 'kl'){
    if(toOpsi== 'g' ||  toOpsi == 'm' || toOpsi == 'l'){
      setToValue(fromValue*1000)
    }
    if(toOpsi == 'ton'){
      setToValue(fromValue/1000)
    }
    if(toOpsi == 'hg' || toOpsi == 'hm' || toOpsi == 'hl'){
      setToValue(fromValue*10)
    }
    if(toOpsi == 'dag' || toOpsi  == 'dam' || toOpsi == 'dal'){
      setToValue(fromValue*100)
    }
    if(toOpsi == 'dg' || toOpsi == 'dm' || toOpsi == 'dl'){
      setToValue(fromValue*10000)

    }
    if(toOpsi == 'cg' || toOpsi == 'cm' || toOpsi == 'cl'){
      setToValue(fromValue * 100000);

    }
    if(toOpsi == 'mg'  || toOpsi == 'mm' || toOpsi == 'ml'){
      setToValue(fromValue*1000000)
    }
  }
  else if(fromOpsi == 'g' || fromOpsi == 'm' || fromOpsi == 'l'){
    if(toOpsi== 'kg'|| toOpsi == 'km' || toOpsi == 'kl'){
      setToValue(fromValue/1000)
    }
    if(toOpsi == 'ton'){
      setToValue(Number(fromValue/1000000))
    }
    if(toOpsi == 'hg'|| toOpsi == 'hm' || toOpsi == 'hl'){
      setToValue(fromValue/100)
    }
    if(toOpsi == 'dag' || toOpsi == 'dam' || toOpsi == 'dal'){
      setToValue(fromValue/10)
    }
    if(toOpsi == 'dg' || toOpsi == 'dm' || toOpsi == 'dl'){
      setToValue(fromValue*10)

    }
    if(toOpsi == 'cg' || toOpsi == 'cm' || toOpsi == 'cl'){
      setToValue(fromValue * 100);

    }
    if(toOpsi == 'mg' || toOpsi == 'mm' || toOpsi == 'ml'){
      setToValue(fromValue*1000)
    }
  }


  else if(fromOpsi == 'ton'){
    if(toOpsi== 'kg'){
      setToValue(fromValue*1000)
    }
  
    if(toOpsi == 'g'){
      setToValue(fromValue*1000000)
    }
    if(toOpsi == 'hg'){
      setToValue(fromValue*10000)
    }
    if(toOpsi == 'dag'){
      setToValue(fromValue*100000)
    }
    if(toOpsi == 'dg'){
      setToValue(fromValue*10000000)

    }
    if(toOpsi == 'cg'){
      setToValue(fromValue*100000000);

    }
    if(toOpsi == 'mg'){
      setToValue(fromValue*1000000000)
    }
  }
  else if(fromOpsi == 'hg' || fromOpsi == 'hm' || fromOpsi == 'hl'){
    if(toOpsi== 'kg' || toOpsi == 'km' || toOpsi == 'kl'){
      setToValue(fromValue/10)
    }
  
    if(toOpsi == 'g'  || toOpsi == 'm' || toOpsi == 'l'){
      setToValue(fromValue*100)
    }
    if(toOpsi == 'ton'){
      setToValue(fromValue/10000)
    }
    if(toOpsi == 'dag' || toOpsi == "dam" || toOpsi == 'dal'){
      setToValue(fromValue*10)
    }
    if(toOpsi == 'dg' || toOpsi == 'dm' || toOpsi == 'dl'){
      setToValue(fromValue*1000)

    }
    if(toOpsi == 'cg' || toOpsi == 'cm' || toOpsi == 'cl'){
      setToValue(fromValue*10000);

    }
    if(toOpsi == 'mg' || toOpsi == 'mm' || toOpsi == 'ml'){
      setToValue(fromValue*100000)
    }
  }
  else if(fromOpsi == 'dag' || fromOpsi == 'dam' || fromOpsi == 'dal'){
    if(toOpsi== 'kg' || toOpsi == 'km' || toOpsi == 'kl'){
      setToValue(fromValue/100)
    }
  
    if(toOpsi == 'g' || toOpsi == 'm' || toOpsi == 'l'){
      setToValue(fromValue*10)
    }
    if(toOpsi == 'ton'){
      setToValue(fromValue/100000)
    }
    if(toOpsi == 'hg' || toOpsi == 'hm' || toOpsi == 'hl'){
      setToValue(fromValue/10)
    }
    if(toOpsi == 'dg' || toOpsi == 'dm' || toOpsi == 'dl') {
      setToValue(fromValue*100)

    }
    if(toOpsi == 'cg' || toOpsi == 'cm' || toOpsi == 'cl'){
      setToValue(fromValue*1000);

    }
    if(toOpsi == 'mg' || toOpsi == 'mm' || toOpsi == 'ml'){
      setToValue(fromValue*10000)
    }
  }

  else if(fromOpsi == 'dg' ||  fromOpsi == 'dm' || fromOpsi == 'dl'){
    if(toOpsi== 'kg' || toOpsi == 'km' || toOpsi == 'kl'){
      setToValue(fromValue/10000)
    }
  
    if(toOpsi == 'g' || toOpsi == 'm' || toOpsi == 'l'){
      setToValue(fromValue/10)
    }
    if(toOpsi == 'ton'){
      setToValue(fromValue/10000000)
    }
    if(toOpsi == 'hg' || toOpsi == 'hm' || toOpsi == 'hl'){
      setToValue(fromValue/1000)
    }
    if(toOpsi == 'dag' || toOpsi == 'dam' || toOpsi == 'dal'){
      setToValue(fromValue/100)

    }
    if(toOpsi == 'cg' || toOpsi == 'cm' || toOpsi == 'cl'){
      setToValue(fromValue*10);

    }
    if(toOpsi == 'mg' || toOpsi == 'mm' || toOpsi == 'ml'){
      setToValue(fromValue*100)
    }
  }
  else if(fromOpsi == 'cg' || fromOpsi == 'cm' || fromOpsi == 'cl'){
    if(toOpsi== 'kg' || toOpsi=='kg' || toOpsi == 'kl' ){
      setToValue(fromValue/100000)
    }
  
    if(toOpsi == 'g' || toOpsi == 'm' || toOpsi == 'l'){
      setToValue(fromValue/100)
    }
    if(toOpsi == 'ton'){
      setToValue(fromValue/100000000)
    }
    if(toOpsi == 'hg' || toOpsi == 'hm' || toOpsi == 'hl'){
      setToValue(fromValue/10000)
    }
    if(toOpsi == 'dag' || toOpsi == 'dam' || toOpsi == 'dal'){
      setToValue(fromValue/1000)

    }
    if(toOpsi == 'dg' || toOpsi == 'dm' || toOpsi == 'dl'){
      setToValue(fromValue/10);

    }
    if(toOpsi == 'mg' || toOpsi == 'mm' || toOpsi == 'ml'){
      setToValue(fromValue*10)
    }
  }
  else if(fromOpsi == 'mg' || fromOpsi == 'mm' || fromOpsi == 'ml') {
    if(toOpsi== 'kg' || toOpsi == 'km' || toOpsi == 'kl'){
      setToValue(fromValue/1000000)
    }
  
    if(toOpsi == 'g' || toOpsi == 'm' || toOpsi == 'l'){
      setToValue(fromValue/1000)
    }
    if(toOpsi == 'ton'){
      setToValue(fromValue/1000000000)
    }
    if(toOpsi == 'hg' || toOpsi == 'hm' || toOpsi == 'hl'){
      setToValue(fromValue/100000)
    }
    if(toOpsi == 'dag' || toOpsi == 'dam' || toOpsi == 'dal'){
      setToValue(fromValue/10000)

    }
    if(toOpsi == 'dg' || toOpsi == 'dm' || toOpsi == 'dl'){
      setToValue(fromValue/100);

    }
    if(toOpsi == 'cg'  || toOpsi == 'cm' || toOpsi == 'cl'){
      setToValue(fromValue/10)
    }
  }
}


function handl(e){
  setFromValue(e.target.value)
   setToValue(0)
  }

  return (
    <>
    < div className='w-full p-4'>

    <div className='w-full  bg-gradient-to-r from-blue-400 to-purple-400 pb-2 '>

      <h1 className='w-full text-center text-4xl text-white'>konversi satuan</h1>
      <select name="konv" onChange={handleOpsi}>
          <option value="berat">Berat</option>
          <option value="panjang">Panjang</option>
          <option value="volumeLiter">Volume Liter</option>
      </select>
      <div className='container mx-auto flex justify-between flex-wrap xs:justify-center ssm:justify-between'>
        <div  className='flex flex-wrap  mt-5'>
           <select name="opsi" className='w-full text-black' onChange={(e)=>//setFromOpsi(e.target.value) 
handleSelect(e)
           } id='sel1'>
            {

              Object.entries(opsi).map(([unit,content])=>{
                return(<option key={unit} value={unit}>{content} ({unit})</option>)
              })
            }
          
            
           </select>
          <input type="text" placeholder='0' className='w-full bg-white py-2 px-4' onChange={handl} id='fromInput'/>
        </div>
        <div  className='flex flex-wrap  mt-5'>
           <select name="opsi" className='w-full text-black' onChange={(e)=> //setToOpsi(e.target.value) 
           handleSelect(e)
           }>
            {

              Object.entries(opsi).map(([unit,content])=>{
                return(<option key={unit} value={unit}>{content} ({unit})</option>)
              })
            }
          
            
           </select>
          <input type="text" placeholder='0' className='w-full bg-white py-2 px-4' value={numberFromat.format(toValue)} id='toInput' disabled/>
        </div>
        <div className='w-full flex justify-center mt-7'>

        <button className='px-10 py-6 bg-white font-semibold rounded-lg active:ring-1 hover:cursor-pointer' onClick={handleKonversi}>Konversi</button>
        </div>
      </div>
      
    </div>
    </div>
              
    </>
  )
}

