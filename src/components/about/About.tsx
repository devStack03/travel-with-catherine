import ImgOne from '../../assets/images/gallery/image-29.jpeg'
import ImgTwo from '../../assets/images/gallery/image-59.jpeg'
import ImgThree from '../../assets/images/gallery/image-79.jpeg'
import ImgFour from '../../assets/images/gallery/image-99.jpeg'

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
        <h2 className="text-4xl text-center uppercase text-black">About</h2>
        <p className="text-base  sm:text-lg ">
          My name is Ekaterine Mitagvaria, and I come from the beautiful city of Tbilisi, Georgia. Programming is my passion, and I love every moment I spend immersed in it. The joy of creating something from scratch and bringing ideas to life is an absolute pleasure for me.    </p>
        <p className="text-base  sm:text-lg ">
          Besides programming, another great love of mine is photography. I don't carry any heavy cameras; instead, I rely on my trusty iPhone to capture the essence of every new place I visit. These photographs become precious memories, allowing me to cherish and relive those experiences whenever I want. Sharing these moments with others is equally fulfilling, as it lets me offer a unique perspective of the world to those around me.
        </p>
        <p className="text-base  sm:text-lg ">
        My wanderlust has taken me to various places in Georgia, Turkey, Azerbaijan, Armenia, and even as far as Germany. Though I haven't traveled to many countries, whenever I do, I make it a point to explore every corner, even if it means focusing on just one city. I believe that every place has its own charm and hidden treasures waiting to be discovered.     </p>
        <p className="text-base  sm:text-lg ">
          The farthest I've journeyed is to the enchanting landscapes of South America, particularly Argentina, a trip that left me awe-inspired and hungry for more adventures. Exploring its diverse cities and natural wonders was an experience like no other, and it fueled my passion for capturing moments through my lens.
        </p>
        <p className="text-base  sm:text-lg ">
          To express my passions and share my travel experiences, I've created a YouTube channel. It's not just a hobby; it's a way for me to connect with fellow travelers and enthusiasts, inspiring their curiosity and igniting their desire to explore. </p>
        <p className="text-base  sm:text-lg ">
          In my heart, I am both a programmer and a photographer, and these passions continue to drive me towards exciting opportunities and discoveries. Whether I'm immersed in code or capturing mesmerizing sceneries, I know that these pursuits will always be an essential part of who I am.
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-8 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgOne}
            alt="Gudauri"
          />
          <p className="font-bold">Gudauri</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgTwo}
            alt="Sighnaghi"
          />
          <p className="font-bold">Sighnaghi</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgThree}
            alt="Stepantsminda"
          />
          <p className="font-bold">Stepantsminda</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgFour}
            alt="Batumi"
          />
          <p className="font-bold">Batumi</p>
        </section>
      </section>
    </article>
  )
}

export default About
