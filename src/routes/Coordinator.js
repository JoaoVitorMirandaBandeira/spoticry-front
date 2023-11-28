export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goToYourPlaylist = (navigate) => {
    navigate('/user/playlists');
}