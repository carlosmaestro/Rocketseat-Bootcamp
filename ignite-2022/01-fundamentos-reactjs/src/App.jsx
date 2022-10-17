import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>

        <Post
          author="Jose da Silva Sauro"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magnam corporis delectus. Molestiae eius, minus quidem amet repudiandae dolorum quaerat illum sint nesciunt corrupti ea recusandae omnis aliquam reiciendis iusto."
        />
        <Post
          author="Luiza"
          content="Post TOP!"
        />
      </main>
    </div>
  </>
}
