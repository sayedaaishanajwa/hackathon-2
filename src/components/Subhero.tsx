import Image from "next/image"
export default function SubHero(){

    return (
        <>
        <div className="-mt-48">
        <div className="subText">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image src="/dining.png" alt="dining.png" width={400} height={300} />
                <h6 className="mt- mb-4 text-xl">Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src="/living.png" alt="living.png" width={400} height={300} />
            <h6 className="mt-4 mb-4 text-xl">Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src="/bedroom.png" alt="bedroom.png" width={400} height={300} />
            <h6 className="mt-4 mb-4 text-xl">Bedroom</h6>    
            </div>
    
            <div className="imgfour">

   <Image src="/filter.png" alt="filter.png" width={400} height={300} />
  <h6 className="mt-4 mb-4 text-xl">filter</h6>    
   </div>

   <div className="imgfive">

   <Image src="/copy.jpg" alt="copy.jpg" width={400} height={300} />
  <h6 className="mt-4 mb-4 text-xl">copy</h6>    
  </div>
           </div>
</div >
        </>
    )
}