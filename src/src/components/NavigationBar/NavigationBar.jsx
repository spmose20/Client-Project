import './NavigationBar.css'


const Navi = () => {
  return(
<div className='Navi'>
  <div className='title'>  
    <br></br>
    <br></br>
    <h1><span>_nology High </span></h1>
    <h2><span>We put the nology in technology.</span></h2>
   
  </div> 
  <div className='navigation'>
    <div class="dropdown">
      <button class="dropbtn">Our Campus</button>
        <div class="dropdown-content">
          <a href="#">Administration</a>
          <a href="#">Guidance Counseling</a>
          <a href="#">School News</a>
        </div>
      </div>
    <button>Calendar</button>
    <button>Dress Code</button>
    <button>Home Access</button>
</div></div>
  )
}

export default Navi;