const darkMode =  () =>{

const themeToggleBtn = document.querySelectorAll('#theme-toggle');

const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

const handleThemeToggler = ()=>{
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('theme', 'light-mode');
    }else{
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
    }
}

themeToggleBtn.forEach(btn=>
 btn.addEventListener('click', handleThemeToggler)
)

}

export default darkMode;