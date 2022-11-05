import classes from'./App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Feed from './components/Feed/Feed';

function App() {
  console.log(classes);
  
  return (
    <div className={classes["App"]}>
      { /*Header*/  }
      <Header />
      { /*Main > Los hijos son reemplazables */  }
      <main>
        <Feed />
      </main>
      { /*Footer*/  }
      <Footer />
    </div>
  )
}

export default App
