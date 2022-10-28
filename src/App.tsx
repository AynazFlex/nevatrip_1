import styles from './App.module.scss';
import items from './store/store';
import Card from './components/Card';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Card {...items[0]} label_modif_cls="card__image-label-style-1" btn_modif_cls="card__more-info_style-1" />
        <Card {...items[1]} label_modif_cls="card__image-label-style-2" btn_modif_cls="card__more-info_style-2" />
        <Card {...items[2]} label_modif_cls="card__image-label-style-3" btn_modif_cls="card__more-info_style-1" />
        <Card {...items[3]} label_modif_cls="card__image-label-style-1" btn_modif_cls="card__more-info_style-1" />
        <Card {...items[4]} btn_modif_cls="card__more-info_style-1" />
      </div>
    </div>
  );
}

export default App;
