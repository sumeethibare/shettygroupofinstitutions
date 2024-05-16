export default async function VideoComponent() {
  return (
    <div class="mt-10 relative max-w-5xl mx-auto p-10">
        <video className="w-full object-cover h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover rounded-xl lg:hover:scale-125 hover:duration-700 duration-700 " autoPlay muted loop>
          <source src="https://video-bom2-1.xx.fbcdn.net/v/t42.1790-2/438891560_1554116518504716_6787869427765616152_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=55d0d3&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCIsInZpZGVvX2lkIjoxMDk1ODcwOTg0OTczOTEwfQ%3D%3D&_nc_ohc=wGkoKGcc9lYQ7kNvgHCmIai&_nc_rml=0&_nc_ht=video-bom2-1.xx&oh=00_AYCZPRyzpgg8MnBuTRZmcjLf59NDqXR4yBegVhWEwe9dGg&oe=664BADE1" type="video/mp4" />
        </video>
    </div>
  )
}