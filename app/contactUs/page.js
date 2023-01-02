import Image from 'next/image';
import Link from 'next/link'

export default function ContactUs() {
    return (
        <div className="h-full">
            <div className='relative text-center text-black'>
                <Image className='w-full h-2/5 ' 
                    src="/assets/contactus-1.jpg"
                    width={500}
                    height={1000}
                    alt="cookie logo"
                    >
                    </Image>
                
                <hi className=' absolute text-5xl ' style={{top:"50%",left:"20%",transform: "translate(-50%, -50%)"}}>
                     Contact Us  
                     <Link className='mt-5' href='https://www.facebook.com/people/%D9%88%D9%84%D8%A7%D8%A1-%D8%B9%D8%B7%D9%8A%D8%A9/100002134357943/'>
                     <Image className='relative mt-5' 
                    src="/assets/facebook.png"
                    width={60}
                    height={60}
                    alt="cookie logo"
                    >
                    </Image>
                     </Link>
                     <Link className='' href='https://github.com/WalaaAtiah'>
                     <Image className='relative' 
                    src="/assets/github.png"
                    width={60}
                    height={60}
                    alt="cookie logo"
                    >
                    </Image>
                     </Link>
                     <Link className='' href='https://www.linkedin.com/in/walaa-atiyh-103aab209/'>
                     <Image className='relative' 
                    src="/assets/linkedin.png"
                    width={60}
                    height={60}
                    alt="cookie logo"
                    >
                    </Image>
                     </Link>
                     <Link className='' href='tel:00962795361781'>
                     <Image className='relative' 
                    src="/assets/phone.png"
                    width={60}
                    height={60}
                    alt="cookie logo"
                    >
                    </Image>
                     </Link>
                     </hi>
                
                
                    
            </div>
            <div className="row"> 
            </div>  

            </div>
     
    
    )
  }
  