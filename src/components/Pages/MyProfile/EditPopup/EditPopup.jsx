import "./editPopup.scss";
import MainButton from "../../../UI/MainButton/MainButton";
const EditPopup = (props) => {
  return (
    <div className="edit">
      <div className="edit__body">
        <button onClick={props.onClick} className="artpopup__close icon-close">
          {props.close}
        </button>
        <div className="edit__top">Edit your Profile</div>
        <div className="edit__bottom">
          <form className="edit__form edit-form">
            <div className="edit-form__row">
              <div className="edit-form__input-wrapper">
                <h3 className="edit-form__top">Name</h3>
                <input name="name" type="text" />
              </div>
              <div className="edit-form__input-wrapper">
                <h3 className="edit-form__top">Username</h3>
                <input name="username" type="text" />
              </div>
            </div>
            <div className="edit-form__row">
              <div className="edit-form__input-wrapper">
                <h3 className="edit-form__top">Email</h3>
                <input name="email" type="email" />
              </div>
              <p className="edit-form__text">
                Add your email address to receive notifications about your
                activity on Foundation. This will not be shown on your profile.
              </p>
            </div>
            <div className="edit-form__input-wrapper">
              <h3 className="edit-form__top">BIO</h3>
              <textarea name="email" type="email" />
            </div>
            <div className="edit-form__input-wrapper">
              <h3 className="edit-form__top">Profile image</h3>
              <input className="edit-form__file" type="file" />
            </div>
            <div className="edit-form__input-wrapper">
              <h3 className="edit-form__top">Contacts</h3>
              <div className="edit-form__contacts edit-contacts">
                <div className="edit-contacts__wrapper">
                  <div className="edit-contacts__left">
                    <div className="profile-icons__item icon-twitch">
                      Twitch
                    </div>
                  </div>
                  <div className="edit-contacts__right">
                    <input name="email" type="text" />
                  </div>
                </div>
                <div className="edit-contacts__wrapper">
                  <div className="edit-contacts__left">
                    <div className="profile-icons__item icon-insta">
                      Instagram
                    </div>
                  </div>
                  <div className="edit-contacts__right">
                    <input name="email" type="text" />
                  </div>
                </div>
                <div className="edit-contacts__wrapper">
                  <div className="edit-contacts__left">
                    <div className="profile-icons__item icon-twitter">
                      Twitter
                    </div>
                  </div>
                  <div className="edit-contacts__right">
                    <input name="email" type="text" />
                  </div>
                </div>
                <div className="edit-contacts__wrapper">
                  <div className="edit-contacts__left">
                    <div className="profile-icons__item icon-onlyfans">
                      Onlyfans
                    </div>
                  </div>
                  <div className="edit-contacts__right">
                    <input name="email" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <MainButton alignSelf="center" name="Save changes" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
