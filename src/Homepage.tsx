const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to My Resume</h1>
      <p>This is the homepage of my resume application.</p>
      <div className="button-section">
        <div>
          <button onClick={() => (window.location.href = "/resume")}>
            Minimalistic
          </button>
        </div>
        <div>
          <button onClick={() => (window.location.href = "/resume-pop")}>
            Pop
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
