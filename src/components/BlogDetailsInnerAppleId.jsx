import React from "react";
import { Link } from "react-router-dom";

const BlogDetailsInner = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-30">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-details-card">
              <div className="blog-meta">
                <Link to="/blog">
                  <i className="fas fa-user" />
                  By admin
                </Link>
                <Link to="/blog">
                  <i className="fas fa-folder-open" />
                  Category
                </Link>
                <Link to="/blog">
                  <i className="fas fa-comments" />
                  Comments (05)
                </Link>
              </div>
              <h2 className="blog-title">
                If you have forgotten your Apple ID password
              </h2>
              {/* <div className="blog-thumb">
                                <img src="/assets/img/blog/stranger-apple-id-featured.jpg" alt="Digious Solutions" />
                            </div> */}
              <div className="blog-content">
                <p className="mt-n2 mb-15">
                  It’s happened to all of us: staring blankly at the glowing
                  Apple Logo, with fingers hovering above the keyboard and a
                  blank mind regarding the password that unlocks the digital
                  paradise.{" "}
                </p>
                <p className="mb-25">
                  You need not fear, Apple enthusiasts, as there is a way out of
                  the maze-like world of forgotten Apple ID Passwords! This
                  guide will give you the tools and knowledge to help you
                  navigate recovery.
                </p>
                <h3 className="blog-inner-title">Reset your password</h3>
                <p className="mt-20">
                  Use the steps below to reset your password from any trusted
                  iPhone, iPad, iPod touch, or Mac. You can also{" "}
                  <Link to="https://support.apple.com/en-gb/102656#help">
                    {" "}
                    use a friend or family member’s iPhone, iPad, or iPod touch.
                  </Link>{" "}
                  If that doesn’t work, you may not be{" "}
                  <Link to="https://support.apple.com/en-gb/111001">
                    signed in to iCloud
                  </Link>{" "}
                  on an eligible device or have{" "}
                  <Link to="https://support.apple.com/en-gb/102660">
                    two-factor authentication
                  </Link>{" "}
                  enabled for your Apple ID.
                  <Link to="https://support.apple.com/en-gb/102656#alternate">
                    Follow these steps instead.
                  </Link>
                </p>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="blog-thumb style2 mb-sm-0 mb-30">
                      <img
                        src="/assets/img/blog/ios-17-iphone-14-pro-settings-sign-in-security-change-password-on-tap.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-thumb style2 mb-sm-0 mb-30">
                      <img
                        src="/assets/img/blog/ios-17-iphone-14-pro-settings-sign-in-security-change-password-on-tap.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 blog-inner-title">
                  On your iPhone, iPad, or iPod touch
                </h3>
                <ul>
                  <li>Go to Settings.</li>
                  <li>
                    Tap [your name] &gt; Password & Security &gt; Change
                    Password.
                  </li>
                  <li>Contact</li>
                  <li>
                    If you are signed in to iCloud and have a passcode enabled,
                    you will be prompted to enter the passcode for your device.
                  </li>
                  <li>Follow the onscreen steps to update your password.</li>
                </ul>
                <h3 className="mt-4 blog-inner-title">On your Mac</h3>
                <p>With macOS Catalina:</p>
                <ul>
                  <li>
                    Choose Apple menu &gt; System Preferences, then click Apple
                    ID.
                  </li>
                  <li>Click Password & Security.</li>
                  <li>
                    If you’re asked to enter your Apple ID password, click
                    “Forgotten Apple ID or password” and follow the onscreen
                    instructions. You can skip the final steps below.
                  </li>
                  <li>
                    If you are signed in to iCloud and have a passcode enabled,
                    you will be prompted to enter the passcode for your device.
                  </li>
                  <li>
                    Click Change Password. Before you can reset your Apple ID
                    password, you’ll be required to enter the password you used
                    to unlock your Mac.
                  </li>
                </ul>
                <h5 className="text-white">
                  With macOS Mojave, High Sierra, or Sierra:
                </h5>
                <ul>
                  <li>
                    Choose Apple menu &gt; System Preferences, then click
                    iCloud.
                  </li>
                  <li>Choose Account Details.</li>
                  <li>
                    If you’re asked to enter your Apple ID password, click
                    “Forgotten Apple ID or password” and follow the onscreen
                    instructions. You can skip the final steps below.
                  </li>
                  <li>
                    Click Security &gt; Reset Password or Change Password.
                    Before you can reset your Apple ID password, you’ll be
                    required to enter the password you used to unlock your Mac.
                  </li>
                </ul>
                <h5 className="text-white">
                  Use a trusted phone number, trusted email, or a recovery key
                </h5>
                <p className="mt-20">
                  In some cases, you may be able to reset your password using a
                  trusted phone number and a trusted email address. If you’re
                  using a recovery key for account security, you can use it to
                  help you reset your password on your iPhone, iPad or iPod
                  touch.{" "}
                  <Link to="https://support.apple.com/en-gb/109345">
                    Find out more about using a recovery key.
                  </Link>
                </p>
                <hr className="its_divider"></hr>
                <h3 className="mt-5 blog-inner-title">
                  If you can’t access any of your devices
                </h3>
                <p className="mt-20">
                  You can reset your Apple ID password on a friend or family
                  member’s iPhone, iPad, or iPod touch using the Apple Support
                  or Find My iPhone apps.
                </p>
                <blockquote>
                  <h4 className="h4">Use the Apple Support app.</h4>
                  <cite>
                    <Link to="https://apple.com">Apple.com</Link>
                  </cite>
                  <p>
                    To reset your password using the Apple Support app on a
                    friend or family member’s iPhone, iPad, or iPod touch with
                    iOS 12 or later, the device owner must download the Apple
                    Support app.
                  </p>
                  <br />
                  <p>
                    Ask the device owner to open the App Store on their iPhone,
                    iPad, or iPod touch, then search for Apple Support and{" "}
                    <Link to="https://support.apple.com/en-gb/109345">
                      download the app.
                    </Link>{" "}
                    Then open the Apple Support app and follow these steps:
                  </p>
                </blockquote>
                <ul>
                  <li>Under Topics, tap Passwords & Security.</li>
                  <li>Tap Reset Apple ID password.</li>
                  <li>Tap Get Started, then tap “A different Apple ID”.</li>
                  <li>
                    Enter the Apple ID for which you need to reset the password.
                  </li>
                  <li>
                    Tap Next, then follow the steps on your screen until you
                    receive confirmation that your Apple ID password is changed.
                  </li>
                </ul>
                <p>
                  Any information that you enter will not be stored on the
                  device.
                </p>
                <h5 className="text-white">Use the Find My iPhone app.</h5>
                <p className="mt-20">
                  If your friend or family member’s device uses iOS 9 to iOS 12
                  and the Apple Support app can’t be downloaded, use the Find My
                  iPhone app instead.
                </p>
                <ul>
                  <li>Open the Find My iPhone app.</li>
                  <li>
                    When a Sign-in screen appears, ensure the Apple ID field is
                    empty. If you see someone else’s user name, erase it.
                  </li>
                  <li>
                    Tap Forgotten Apple ID or Password, then follow the onscreen
                    steps.
                  </li>
                </ul>
                <p className="mt-20">
                  Don’t see a Sign In screen? Tap Sign Out. After you sign out,
                  make sure the Apple ID field is empty. Then tap Forgotten
                  Apple ID or Password, and follow the onscreen steps.
                </p>
                <p className="mt-20">
                  If you’ve tried the previous steps or live in a country or
                  region where the Apple Support app is not available, you can
                  still reset your password and regain access to your account by
                  using account recovery. In some cases, you may have the option
                  to speed up the account recovery process or reset your
                  password immediately by verifying a six-digit code that is
                  sent to your primary email address. Find out more about
                  account recovery.
                </p>
                <hr className="its_divider"></hr>
                <h3 className="mt-5 blog-inner-title">
                  If you can’t change or reset your password
                </h3>
                <p className="mt-20">
                  If you tried the previous steps and were unable to change or
                  reset your password, you may not be{" "}
                  <Link to="https://support.apple.com/en-gb/111001">
                    signed in to iCloud
                  </Link>{" "}
                  on an eligible device or have{" "}
                  <Link to="https://support.apple.com/en-gb/102660">
                    two-factor authentication
                  </Link>{" "}
                  enabled for your Apple ID. You’ll need to try these steps
                  instead.
                </p>
                <h5 className="text-white">
                  Accounts with or without security questions
                </h5>
                <ul>
                  <li>
                    Go to your Apple ID account page and click “Forgotten Apple
                    ID or password”.
                  </li>
                  <li>Enter your Apple ID. Did you forget your Apple ID?</li>
                  <li>
                    Select the option to reset your password, then choose
                    Continue.
                  </li>
                  <li>
                    Choose how to reset your password:
                    <ul>
                      <li>
                        If you have an account with security questions set up,
                        you can select “Answer security questions” and follow
                        the rest of the steps.
                      </li>
                      <li>
                        To get an email instead, select “Get an email”. To reset
                        your password, use the email that we send to your
                        primary or rescue email address. Didn’t get the email?
                      </li>
                      <li>
                        If asked for a Recovery Key, use the steps for
                        two-factor authentication or two-step verification
                        instead.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p>
                  After you reset your password, you’ll be asked to sign in
                  again with your new password. You also might need to update
                  your password in Settings on your devices.
                </p>
                <img src="/assets/img/blog/macos-mojave-safari-appleid-password-reset-email.jpg" alt="Digious Solutions" />
                <hr className="its_divider"></hr>
                <h5 className="text-white">
                  Accounts with two-step verification
                </h5>
                <ul>
                  <li>
                    Go to your Apple ID account page and click “Forgotten Apple
                    ID or password”.
                  </li>
                  <li>
                    Enter your Apple ID, select the option to reset your
                    password, then choose Continue. Did you forget your Apple
                    ID?
                  </li>
                  <li>Enter your Recovery Key for two-step verification.*</li>
                  <li>
                    Choose a trusted device.* We’ll send your device a
                    verification code.
                  </li>
                  <li>Enter the verification code.</li>
                  <li>Create a new password, then select Reset Password.</li>
                </ul>
                <p>
                  After you reset your password, you’ll be asked to sign in
                  again with your new password. You also might need to update
                  your password in Settings on your devices.
                </p>
                <ul>
                  <li>
                    If you permanently lost your Recovery Key or access to your
                    trusted device, you can’t change your password.
                  </li>
                </ul>
                <img src="/assets/img/blog/macos-mojave-safari-appleid-enter-recovery-key.jpg" alt="Digious Solutions" />
              </div>
            </div>
            {/* <div className="share-links clearfix ">
                  <div className="row justify-content-between">
                    <div className="col-sm-auto">
                      <span className="share-links-title">Tags:</span>
                      <div className="tagcloud">
                        <Link to="/blog">Data Tech</Link>
                        <Link to="/blog">Optimization Services</Link>
                      </div>
                    </div>
                    <div className="col-sm-auto text-xl-end">
                      <ul className="social-links">
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
            {/* <div className="comments-wrap style2 ">
              <h2 className="blog-inner-title h3">01 Comment</h2>
              <ul className="comment-list">
                <li className="comment-item">
                  <div className="post-comment">
                    <p className="text">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making
                    </p>
                  </div>
                  <div className="comment-content">
                    <h3 className="name">Savannah Nguyen</h3>
                    <span className="commented-on">
                      December 23,2022 at 8:50 P.M
                    </span>
                    <div className="reply_and_edit">
                      <Link to="/blog-details" className="reply-btn">
                        Reply
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div> */}
            {/* <div className="comments-wrap">
              
              <h3 className="blog-inner-title text-capitalize">
                
                Leave a comment
              </h3>
              <div className="comment-form mb-30">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <select
                      name="subject"
                      id="subject"
                      className="form-select style-white"
                    >
                      <option defaultValue={1}>Choose a Option</option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                    </select>
                    <i className="fas fa-angle-down" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Message here.."
                      className="form-control style-white"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="global-btn">
                      Submit Now
                      <img
                        src="/assets/img/icon/right-icon.svg"
                        alt="Digious Solutions"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <h3 className="widget_title">Search Here</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search.." />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              {/* <div className="widget widget_categories">
                <h3 className="widget_title">Category</h3>
                <ul>
                  <li>
                    <Link to="/blog">
                      Business Growth Catalyst{" "}
                      <img
                        src="/assets/img/icon/category-1.svg"
                        alt="Digious Solutions"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Digital Transformation
                      <img
                        src="/assets/img/icon/category-2.svg"
                        alt="Digious Solutions"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Advisors Growth Catalyst
                      <img
                        src="/assets/img/icon/category-3.svg"
                        alt="Digious Solutions"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Financial Advisory Partners
                      <img
                        src="/assets/img/icon/category-4.svg"
                        alt="Digious Solutions"
                      />
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div className="widget">
                <h3 className="widget_title">Latest Blog</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="recent-post-meta">
                      <Link to="/blog">
                        <img
                          src="/assets/img/icon/calender.svg"
                          alt="Digious Solutions"
                        />
                        Jan 10, 2024
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details">
                          Navigating Global Trade One Shipmen
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="recent-post-meta">
                      <Link to="/blog">
                        <img
                          src="/assets/img/icon/calender.svg"
                          alt="Digious Solutions"
                        />
                        Jan 10, 2024
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details">
                          Strategic Solutions for the a Business Growth
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="recent-post-meta">
                      <Link to="/blog">
                        <img
                          src="/assets/img/icon/calender.svg"
                          alt="Digious Solutions"
                        />
                        Jan 10, 2024
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details">
                          Achieve Your Business Goals with Confidence
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                  <Link to="/blog">Experts</Link>
                  <Link to="/blog">Efficiency</Link>
                  <Link to="/blog">Digital</Link>
                  <Link to="/blog">Transform</Link>
                  <Link to="/blog">Chain</Link>
                  <Link to="/blog">Partner</Link>
                </div>
              </div> */}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsInner;
