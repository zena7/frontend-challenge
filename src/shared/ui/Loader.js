import pawLoader from '../../assets/PawLoader.gif';

export function Loader({ loading, page }) {
  return (
    <>
      {loading && page === 0 && (
        <img src={pawLoader} alt="pawLoader" className="loader" />
      )}
      {loading && page > 0 && (
        <p className="downloadMore"> ...загружаем еще котиков...</p>
      )}
    </>
  );
}
