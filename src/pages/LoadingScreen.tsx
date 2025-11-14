const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-screen__frame">
        <span className="loading-screen__year">2024</span>

        <div className="loading-screen__logo" aria-label="MS loading mark">
          <span className="loading-screen__letter loading-screen__letter--m">M</span>
          <span className="loading-screen__slash" aria-hidden="true" />
          <span className="loading-screen__letter loading-screen__letter--s">S</span>
          <span className="loading-screen__dot" aria-hidden="true" />
        </div>

        <div className="loading-screen__footer">
          <span className="loading-screen__accent" aria-hidden="true" />
          <p className="loading-screen__caption">Visualizing concepts. Modern. Clean. Modern. Impactful.</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
