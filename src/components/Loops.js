import React, { useRef } from 'react'

function Loops() {

    let ifButtonRef = useRef();
    let whileButtonRef = useRef();
    let doWhileButtonRef = useRef();
    let forButtonRef = useRef();
    let tableButtonRef = useRef();
    let breakButtonRef = useRef();
    let continueButtonRef =useRef();



  return (
    <div>
      <h1>LOOPS - WHILE, DOWHILE, FOR</h1>
      <div className='loopsBTNDiv'>
        {/* IF BUTTON */}
        <button type='button'
          onClick={ () => {
            const a =20;
            if(a >= 10) {
              console.log("a is 20");
              ifButtonRef.current.innerHTML = `<strong>IF :</strong> <br/><span>a is 20</span>`;
            }
          }}
        >IF</button>

          {/* WHILE BUTTON */}
        <button type='button'
          onClick={ () => {
            let a=20;
            while(a <= 10000){
              // console.log("a is 20");
              whileButtonRef.current.innerHTML = `<strong>WHILE :</strong> <br/><span>a is ${a}</span>`;
              console.log(`a is ${a}`);
              a++;
            }
          }}>WHILE</button>

        {/* DOWHILE BUTTON */}
        <button type='button'
          onClick={ () => {
            let a=200; 
            do {
              console.log("inside do while");
              doWhileButtonRef.current.innerHTML = '<strong>DOWHILE :</strong> <br/><span>inside do while</span>';
            }while(a>1000)
          }}        
        >DOWHILE</button>

        {/* FOR BUTTON */}
        <button type='button'
          onClick={ () => {
            for(let i=1;i<=2000; i++){
              console.log(i);
              forButtonRef.current.innerHTML=`<strong>FOR :</strong> <br/><span>a is ${i}</span>`;
            }
          }}        
        >FOR</button>

        {/* TABLES */}
         <button type='button'
                onClick={ () =>{
                  for(let i=1;i<=100; i++) 
                  {
                    for(let j=1;j<=10;j++)
                      {
                        console.log(`${i} * ${j} == ${i}${j}`);
                        tableButtonRef.current.innerHTML = `<strong>FOR :</strong> <br/><span>a is ${i} * ${j} == ${i}${j}</span>`
                      }
                  }
                }}
          >TABLES</button>

          {/* BREAK */}
          <button type='button' 
            onClick={ () => {
              for(let i =1; i<=100000; i++){
                
                if (i == 9999) {
                  break;
                }
                console.log(i);
                breakButtonRef.current.innerHTML = `<strong>BREAK :</strong> <br/><span>a is ${i}</span>`;
              }
            }}
          >BREAK</button>

          {/* CONTINUE */}
          <button type='button' 
            onClick={ () => {
              for(let i=1;i<=10000;i++)
              {
                if(i>=1000 && i<=9000){
                  continue;
                }
                console.log(i);
                breakButtonRef.current.innerHTML = `<strong>BREAK :</strong> <br/><span>a is ${i}</span>`;
              }
            }}
          >CONTINUE</button>      
      </div>
      <div className='paragraphResultDiv'>
        <p ref={ifButtonRef}></p>
        <p ref={whileButtonRef}></p>
        <p ref={doWhileButtonRef}></p>
        <p ref={forButtonRef}></p>
        <p ref={tableButtonRef}></p>
        <p ref={breakButtonRef}></p>
        <p ref={continueButtonRef}></p>
      </div>

          {/* TASK */}

          <div>
              <h1>TABLES - TASK </h1>
              <button type='button'
              
                onClick={ () => {
                  for (let i = 1; i <= 1000; i++) {
                    // Skip specific tables
                    if (i == 135 || i == 549 || i == 601 || 
                        i == 611 || i == 643 || i == 721 || i == 756) {
                      continue;
                    }
                  
                    for (let j = 1; j <= 100; j++) {
                      // Skip specific multiples
                      if (j == 6 || j == 7 || j == 8 || j == 9 || j == 12 || j == 14 || 
                          j == 15 || j == 23 || j == 46 || j == 79 || j == 86) {
                        continue;
                      }
                  
                      console.log(`${i} * ${j} = ${i * j}`);
                    }
                  }
                }}
              
              >TABLES TASK</button>
              
          </div>


    </div>
  )
}

export default Loops
