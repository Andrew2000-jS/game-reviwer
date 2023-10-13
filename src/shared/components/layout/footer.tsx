import Image from 'next/image'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import styles from './styles/footer.module.css'

function Footer () {
  return (
    <footer className={styles.container}>
      <section className="w-full flex flex-col justify-center">
        <article className={styles.content}>
          <div className="sm:flex-1">
            <div>
                <Image src="/favicon.ico" alt="logo" width={50} height={50}/>
            </div>
            <div className='hidden mb-2 sm:block'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
                <p className='text-sm'>@Logo</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col flex-1">
            <div>
                <h5 className='font-bold'>About us</h5>
            </div>
            <div>
                <ul>
                    <li>Andrew</li>
                    <li>Portfolio</li>
                    <li>Other</li>
                </ul>
            </div>
          </div>
          <div className="sm:flex-1">
            <div>
                <h5 className='font-bold'>Contact us</h5>
            </div>
            <div className='hidden sm:block'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
                <p>+000 00000 000</p>
            </div>
          </div>
          <div className='flex justify-center items-end flex-1 h-full gap-3 mt-5 sm:mt-0'>
                <div>
                    <BsFacebook size={24}/>
                </div>
                <div>
                    <BsInstagram size={24} />
                </div>
                <div>
                    <BsTwitter size={24} />
                </div>
                <div>
                    <BsLinkedin size={24} />
                </div>
          </div>
        </article>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <article className='flex justify-center items-center'>
            <p className='text-sm'>Copyright ® 2023 Lorem All rights Rcerved</p>
        </article>
      </section>
    </footer>
  )
}

export default Footer
