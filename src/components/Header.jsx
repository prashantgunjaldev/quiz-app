import logo from '../assets/quiz-logo.png';
export default function Header (){
    return <header>
        <img src={logo} alt='Logo Quiz' />
        <h1>React Quiz</h1>
    </header>;
}