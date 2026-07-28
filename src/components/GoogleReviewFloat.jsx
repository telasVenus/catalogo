import styles from './GoogleReviewFloat.module.css';

function openGoogleReview() {
  window.open(`https://g.page/r/CV5tXwpoIBz_EAI/review`)
}

export default function GoogleReview() {
  return (
    <a 
      href="#"
      className={styles.googleReviewFloat}
      onClick={(e) => { e.preventDefault(); openGoogleReview() }}
    >
      <i className="fab fa-google"></i>
      Avalie-nos no Google
    </a>
  )
}
