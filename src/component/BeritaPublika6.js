import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo_wa from "../img/logo_wa.png"
import logo_fb from "../img/logo_fb.png"
import logo_x from "../img/logo_x.png"
import logo_ig from "../img/logo_ig.png"
import logo_tiktok from "../img/logo_tiktok.png"
import profile_report_1 from "../img/profile_report_1.jpg"
import content_berita_1 from "../img/content_berita_1.jpg"
import republik_merdeka from "../img/republik_merdeka.png"
import poster_rmol_id from "../img/poster_rmol_id.jpg"
import img_berita_rmol_1 from "../img/img_berita_rmol_1.jpg"
import img_berita_rmol_2 from "../img/img_berita_rmol_2.jpg"
import img_berita_rmol_3 from "../img/img_berita_rmol_3.jpg"
import img_berita_rmol_4 from "../img/img_berita_rmol_4.jpg"
import img_berita_rmol_5 from "../img/img_berita_rmol_5.jpg"
import poster_app_store from "../img/poster_app_store.jpg"
import play_store from "../img/play_store.png"
import app_store from "../img/app_store.png"
import ReactPlayer from "react-player";
import top_seven_1 from "../img/top_seven_1.jpg"
import top_seven_2 from "../img/top_seven_2.jpg"
import top_seven_3 from "../img/top_seven_3.jpg"
import tes from "../img/tes.jpeg"
import top_seven_5 from "../img/top_seven_5.jpg"
import top_seven_6 from "../img/top_seven_6.jpg"
import top_seven_7 from "../img/top_seven_7.jpg"
import logo_yt from "../img/logo_yt.png"
import img_article_1 from "../img/img_article_1.jpg"
import img_article_2 from "../img/img_article_2.jpg"
import img_article_3 from "../img/img_article_3.jpg"
import img_article_4 from "../img/img_article_4.jpg"
import img_article_5 from "../img/img_article_5.jpg"
import img_article_6 from "../img/img_article_6.jpg"
import alifia from "../img/alifia.jpg";
import img_bisnis_1 from "../img/img_bisnis_1.jpeg"
import bisnis_terkait_1 from "../img/bisnis_terkait_1.jpg"
import bisnis_terkait_2 from "../img/bisnis_terkait_2.jpeg"
import bisnis_terkait_3 from "../img/bisnis_terkait_3.jpeg"
import bisnis_terkait_4 from "../img/bisnis_terkait_4.jpeg"
import bisnis_other_1 from "../img/bisnis_other_1.jpeg"
import bisnis_other_2 from "../img/bisnis_other_2.jpeg"
import bisnis_other_3 from "../img/bisnis_other_3.jpeg"
import bisnis_other_4 from "../img/bisnis_other_4.jpeg"
import bisnis_other_5 from "../img/bisnis_other_5.jpeg"
import bisnis_other_6 from "../img/bisnis_other_6.jpg"
import img_bawaslu_1 from "../img/img_bawaslu_1.jpg"
import img_bawaslu_2 from "../img/img_bawaslu_2.jpeg"
import img_bawaslu_3 from "../img/img_bawaslu_3.jpeg"
import img_bawaslu_4 from "../img/img_bawaslu_4.jpg"
import img_bawaslu_5 from "../img/img_bawaslu_5.jpeg"
import img_bawaslu_6 from "../img/img_bawaslu_6.jpg"
import img_bawaslu_7 from "../img/img_bawaslu_7.jpg"
import img_bawaslu_8 from "../img/img_bawaslu_8.jpg"
import adit from "../img/aditya.jpg"
import ahmad from "../img/ahmad.jpg"
import terkait_bawaslu_1 from "../img/terkait_bawaslu_1.jpg"
import terkait_bawaslu_2 from "../img/terkait_bawaslu_2.jpg"
import terkait_bawaslu_3 from "../img/terkait_bawaslu_3.jpeg"
import terkait_bawaslu_4 from "../img/terkait_bawasu_4.jpg"
import other_bawaslu_1 from "../img/other_bawaslu_1.jpg"
import other_bawaslu_2 from "../img/other_bawaslu_2.jpeg"
import other_bawaslu_3 from "../img/other_bawaslu_3.jpg"
import other_bawaslu_4 from "../img/other_bawaslu_4.jpg"
import other_bawaslu_5 from "../img/other_bawaslu_5.jpg"
import other_bawaslu_6 from "../img/other_bawaslu_6.jpg"
import img_publika_1 from "../img/img_publika_1.jpg"
import img_publika_2 from "../img/img_publika_2.jpg"
import img_publika_3 from "../img/img_publika_3.jpg"
import img_publika_4 from "../img/img_publika_4.jpg"
import img_publika_5 from "../img/img_publika_5.jpg"
import img_publika_6 from "../img/img_publika_6.jpg"
import img_publika_7 from "../img/img_publika_7.jpg"
import img_publika_8 from "../img/img_publika_8.jpeg"
import terkait_publika_1 from "../img/terkait_publika_1.jpeg"
import terkait_publika_2 from "../img/terkait_publika_2.jpeg"
import terkait_publika_3 from "../img/terkait_publika_3.jpg"
import terkait_publika_4 from "../img/terkait_publika_4.jpg"
import other_publika_1 from "../img/other_publika_1.jpg"
import other_publika_2 from "../img/other_publika_2.jpg"
import other_publika_3 from "../img/other_publika_3.jpeg"
import other_publika_4 from "../img/other_publika_4.jpg"
import other_publika_5 from "../img/other_publika_5.jpg"
import other_publika_6 from "../img/other_publika_6.jpeg"

function BeritaPublika6 () {
    return (
        <div className="wadah_berita_politik">
            <div className="margin_kanankiri">
                <div className="content_berita_politik">
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="wadah_content_berita_politik_all">
                                <div className="button_politik">
                                    <Link to="/publika" className="link_button_politik_1">Publika</Link>
                                </div>
                                <div className="wadah_judul_berita_politik_1">
                                    <h1 className="judul_berita_politik_1">Ridwan Kamil dan Jakarta Gemilang
                                    </h1>
                                </div>
                                <div className="wadah_icon_medsos_politik_1">
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_wa} className="icon_medsos_politik" />
                                    </Link>
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_fb} className="icon_medsos_politik" />
                                    </Link>
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_x} className="icon_medsos_politik" />
                                    </Link>
                                    <Link className="link_icon_medsos_politik_1">
                                        <img src={logo_ig} className="icon_medsos_politik" />
                                    </Link>
                                    <Link>
                                        <img src={logo_tiktok} className="icon_medsos_politik" />
                                    </Link>
                                </div>
                                <div className="wadah_profil_report">
                                    <Row>
                                        <Col xl={1} lg={1} md={1} sm={1} xs={2}>
                                            <div className="wadah_profil_report_2">
                                                <img src={adit} className="content_img_profil_report" />
                                            </div>
                                        </Col>
                                        <Col xl={11} lg={11} md={11} sm={11} xs={10}>
                                            <div className="wadah_name_reporter">
                                                <span className="content_name_reporter">REPORT : </span>
                                                <span className="content_name_reporter content_name_reporter_bold">ADITYO NUGROHO</span>
                                            </div>
                                            <div className="wadah_date_reporter_post">
                                                <span className="date_reporter_post">Jumat, 22 November 2024, 10:22 WIB
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_img_post_berita">
                                    <img src={img_publika_6} className="content_img_post_berita" />
                                </div>
                                <div className="wadah_span_img_post">
                                    <span className="content_span_img_post">Cagub Jakarta Ridwan Kamil/Ist
                                    </span>
                                </div>
                                <div className="wadah_deskripsi_post_1">
                                    <img src={republik_merdeka} className="img_deskripsi_post_1" />
                                    <span className="span_deskripsi_post_1">DUKUNGAN Habib Rizieq Shihab, Imam Besar umat Islam Indonesia, khususnya dengan jutaan pengikut di Jakarta kepada Ridwan Kamil (RK), terutama diberikan melalui FPI Jakarta dan juga dukungan mantan Ketua Umum Muhammadiyah, Prof. Dr. Din Syamsuddin, yang juga mantan ketua umum Majelis Ulama Indonesia (MUI), begitu menggemparkan secara politik. 
                                    </span>
                                </div>
                                <div className="wadah_poster_rmol_berita_terkait">
                                    <Row>
                                        <Col xl={2} lg={2} md={2} sm={2}>
                                            <div className="wadah_poster_rmol_id">
                                                <img src={poster_rmol_id} className="poster_rmol_id" />
                                            </div>
                                        </Col>
                                        <Col xl={10} lg={10} md={10} sm={10} xs={12}>
                                            <div className="wadah_berita_terkait_rmol">
                                                <h3 className="heading_berita_terkait_rmol">BERITA TERKAIT : </h3>
                                                <Row>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/politik/read/2024/11/21/645598/lmnd-kritik-slogan-kecantikan-perempuan-dalam-kampanye-pilkada">
                                                                <img src={terkait_publika_1} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/11/21/645598/lmnd-kritik-slogan-kecantikan-perempuan-dalam-kampanye-pilkada" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">LMND Kritik Slogan "Kecantikan" Perempuan dalam Kampanye Pilkada</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/politik/read/2024/10/29/642621/sultan-tidore-ajak-anak-muda-aktif-dalam-pembangunan">
                                                                <img src={terkait_publika_2} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/10/29/642621/sultan-tidore-ajak-anak-muda-aktif-dalam-pembangunan" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Sultan Tidore Ajak Anak Muda Aktif dalam Pembangunan</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/politik/read/2024/10/13/640587/ahy-doakan-perjuangan-benny-laos-bermanfaat">
                                                                <img src={terkait_bawaslu_3} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/politik/read/2024/10/13/640587/ahy-doakan-perjuangan-benny-laos-bermanfaat" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">AHY Doakan Perjuangan Benny Laos Bermanfaat</span>
                                                        </Link>
                                                    </Col>
                                                    <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                                                        <div className="wadah_img_berita_terkait_rmol margin_bottom_berita_rmol">
                                                            <Link to="https://rmol.id/nusantara/read/2024/10/12/640544/berkerabat-dengan-benny-laos-sandiaga-uno-kenang-sosok-toleransi">
                                                                <img src={terkait_publika_4} className="img_berita_terkait_rmol" />
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                                                        <Link to="https://rmol.id/nusantara/read/2024/10/12/640544/berkerabat-dengan-benny-laos-sandiaga-uno-kenang-sosok-toleransi" className="link_span_berita_terkait">
                                                            <span className="span_berita_terkait">Berkerabat dengan Benny Laos, Sandiaga Uno Kenang Sosok Toleransi</span>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                <div className="wadah_paragraf_berita_rmol">
                                                    <p className="content_paragraf_berita_rmol">Sebab, kedua tokoh ini adalah sosok yang mengalami getirnya perjuangan menghadapi rezim Jokowi selama ini. Lalu mengapa keduanya mendukung RK yang juga didukung Jokowi? Bukan seperti Anies Baswedan mendukung Pramono Anung?    
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Pertanyaan seperti ini muncul dalam berbagai debat WA Group, apakah kaum oposisi di Jakarta mendukung RK yang jelas-jelas didukung Jokowi ataukah Pramono Anung yang didukung Megawati Soekarnoputri?
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Saya belum bertanya langsung kepada kedua tokoh tersebut, meskipun sesungguhnya kami sangat dekat. Belum. Sempat berjumpa. Imam Besar Habib Rizieq (IB HRS) melalui Bin Talib memberikan saya salam hangat dari Mekkah beberapa waktu lalu. (Ketika foto mereka saya unggah ke Instagram, langsung dihapus Instragram). 
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Sambil menunggu alasan analitis mengapa IB HRS dan Prof Din Syamsuddin, mendukung RK, kita bisa menganalisa baik buruknya kedua tokoh cagub DKI Jakarta saat ini, yakni RK versus Pram.  
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Hal ini dibutuhkan untuk mengimbangi liarnya opini akibat adanya imbauan Anies Baswedan agar "anak abah" mendukung Pramono Anung. Sebab, pengertian anak abah ini bisa mengklaim semua pendukung Anies di pilpres jika tidak diluruskan. 
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Anies tentu punya pertimbangan politik sendiri untuk mendukung Pramono Anung. Kita paham kegetiran yang menimpa Anies Baswedan akibat gagal menjadi calon gubernur DKI, yang disingkirkan rezim Jokowi dan gagal masuk keputaran kedua pilpres, yang diperkirakan sebagai akibat pemilu barbar. 
                                                    </p>
                                                </div>
                                                <div className="wadah_paragraf_berita_rmoll">
                                                    <p className="content_paragraf_berita_rmol">Untuk itulah sikap dua tokoh nasional, Imam Besar Habib Rizieq Shihab dan Prof Din Syamsuddin di atas menjadi pertimbangan lainnya untuk bersikap. 
                                                    </p>
                                                </div>
                                                <div className="wadah_name_editor_org">
                                                    <span className="name_editor_org">EDITOR : </span>
                                                    <span className="name_editor_org bold_editor">WIDODO BOGIARTO</span>
                                                </div>
                                                <div className="wadah_icon_medsos_politik_1">
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_wa} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_fb} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_x} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link className="link_icon_medsos_politik_1">
                                                        <img src={logo_ig} className="icon_medsos_politik" />
                                                    </Link>
                                                    <Link>
                                                        <img src={logo_tiktok} className="icon_medsos_politik" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12}>
                                            <div className="wadah_other_articles">
                                                <div className="wadah_button_other_articles">
                                                    <span>OTHER ARTICLES</span>
                                                </div>
                                                <Row>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/publika/read/2024/11/23/645892/media-demokrasi">
                                                                        <img src={other_publika_1} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Publika</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/publika/read/2024/11/23/645892/media-demokrasi" className="link_deskrip_political">
                                                                                <span>Media Demokrasi</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article_left margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/publika/read/2024/11/22/645764/ridwan-kamil-dan-jakarta-gemilang">
                                                                        <img src={other_publika_2} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Publika</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/publika/read/2024/11/22/645764/ridwan-kamil-dan-jakarta-gemilang" className="link_deskrip_political">
                                                                                <span>Ridwan Kamil dan Jakarta Gemilang</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/publika/read/2024/11/22/645738/menyambut-tahun-koperasi-internasional">
                                                                        <img src={other_publika_3} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Publika</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/publika/read/2024/11/22/645738/menyambut-tahun-koperasi-internasional" className="link_deskrip_political">
                                                                                <span>Menyambut Tahun Koperasi Internasional
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article_left margin_bottom_article_other">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/publika/read/2024/11/22/645863/syahwat-politik-jokowi-di-jawa-tengah-ancaman-bagi-demokrasi">
                                                                        <img src={other_publika_4} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Pubika</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/publika/read/2024/11/22/645863/syahwat-politik-jokowi-di-jawa-tengah-ancaman-bagi-demokrasi" className="link_deskrip_political">
                                                                                <span>Syahwat Politik Jokowi di Jawa Tengah: Ancaman Bagi Demokrasi</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article margin_bottom_article_other_3">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/publika/read/2024/11/22/645748/akhaffu-dhararain">
                                                                        <img src={other_publika_5} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article padding_right_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Publika</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/publika/read/2024/11/22/645748/akhaffu-dhararain" className="link_deskrip_political">
                                                                                <span>Akhaffu Dhararain</span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={12} md={12}>
                                                        <div className="padding_other_article_left">
                                                            <Row>
                                                                <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                                    <Link to="https://rmol.id/publika/read/2024/11/22/645730/koperasi-dan-era-anthropocene">
                                                                        <img src={other_publika_6} className="img_other_articles" />
                                                                    </Link>
                                                                </Col>
                                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                                    <div className="wadah_political_and_deskrip_article">
                                                                        <Link>
                                                                            <div className="wadah_button_political">
                                                                                <span>Publika</span>
                                                                            </div>
                                                                        </Link>
                                                                        <div className="wadah_deskrip_political">
                                                                            <Link to="https://rmol.id/publika/read/2024/11/22/645730/koperasi-dan-era-anthropocene" className="link_deskrip_political">
                                                                                <span>Koperasi dan Era Anthropocene
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={12} sm={12}>
                            <div className="wadah_content_sidebar_react margin_top_20px">
                                <div className="wadah_react_video_sidebar">
                                    <ReactPlayer width="100%" height="622px" url="https://www.youtube.com/watch?v=IBDhaN29zwU&pp=ygUHcHVibGlrYQ%3D%3D" />
                                </div>
                                <div className="wadah_poster_app">
                                    <Link>
                                        <img src={poster_app_store} className="content_poster_app" />
                                    </Link>
                                </div>
                                <div className="wadah_logo_poster_app">
                                    <img src={app_store} className="logo_poster_app" />
                                    <img src={play_store} className="logo_poster_app" />
                                </div>
                                <Link>
                                    <div className="wadah_button_seven">
                                        <span>TOP SEVEN</span>
                                    </div>
                                </Link>
                                <div className="wadah_berita_top_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_1} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">1</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Anies Ungkap Alasan Tak Maju Lewat Jalur Independen</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_2} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">2</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Mendadak Mundur, Airlangga Diduga dalam Tekanan</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_3} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">3</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Arief Poyuono: Isu Airlangga Mundur untuk Jatuhkan Jokowi</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={tes} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">4</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Kakorlantas Cek Kesiapan Satgas Pamwalrolakir Jelang Upacara Kemerdekaan</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_5} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">5</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Burung dan Benalu di Dahan Beringin Tua</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_6} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">6</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Mardani Ali Sera: Kecil Peluang PKS Dukung Anies</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="wadah_berita_top_seven margin_top_berita_seven">
                                    <Row>
                                        <Col xl={4} lg={2} md={2} sm={3} xs={3}>
                                            <div className="wadah_img_berita_top_seven">
                                                <Link>
                                                    <img src={top_seven_7} className="img_berita_top_seven" />
                                                </Link>
                                                <div className="nomor_berita_top_seven">7</div>
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={10} md={10} sm={9} xs={9}>
                                            <div className="wadah_content_top_seven">
                                                <Link className="link_content_berita_top_seven">
                                                    <span>Ini Sosok S yang Digadang-gadang Bakal Dampingi RK</span>
                                                </Link>
                                                <div className="wadah_tanggal_and_politik_top_seven">
                                                    <span className="content_politik_span_top_seven">Politik</span>
                                                    <span className="tanggal_politik_span_top_seven">10 Agustus 2024 02:42</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_iklan_top_seven margin_top_iklan_seven">
                                    <span>IKLAN DI SINI</span>
                                </div>
                                <div className="wadah_iklan_top_seven margin_top_iklan_seven">
                                    <span>IKLAN DI SINI</span>
                                </div>
                                <div className="wadah_video_iklan_top_seven margin_top_iklan_seven background_color_content_berita">
                                    <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=r1JGrbmqAJI&pp=ygUHcHVibGlrYQ%3D%3D" />
                                    <div className="wadah_deskrip_link_top_seven">
                                        <Link className="wadah_logo_link_ig_top_seven margin_right_logo_ig_top_seven">
                                            <img src={logo_ig} className="logo_ig_top_seven" />
                                        </Link>
                                        <Link className="wadah_logo_link_ig_top_seven">
                                            <span>rmol.id</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="wadah_trending_tag background_color_content_berita">
                                    <div className="button_trending_tag">
                                        <span>TRENDING TAG</span>
                                    </div>
                                    <div className="wadah_tagar_top_seven">
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#AGUS GUMIWANG KARTASASMITA</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#AIRLANGGA HARTARTO</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#ANWAR USMAN</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#BMKG</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#BPIP</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2 margin_bottom_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#GIBRAN RAKABUMING RAKA</span>
                                            </Link>
                                        </div>
                                        <div className="wadah_tagar_top_seven_2">
                                            <Link className="link_content_tagar_top_seven">
                                                <span className="content_tagar_top_seven">#JOKO WIDODO</span>
                                            </Link>
                                        </div>
                                    </div> 
                                </div>
                                <div className="wadah_trending_tag margin_bottom_trending_tag background_color_content_berita margin_bottom_follow_us">
                                    <div className="button_trending_tag">
                                        <span>FOLLOW US</span>
                                    </div>
                                    <div className="wadah_logo_medsos_top_seven">
                                        <Link>
                                            <img src={logo_fb} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_x} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_ig} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_tiktok} className="logo_medos margin_right_logo_medsos" />
                                        </Link>

                                        <Link>
                                            <img src={logo_yt} className="logo_medos" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default BeritaPublika6;