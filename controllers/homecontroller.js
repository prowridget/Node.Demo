class HomeController {
    static Home(req, res) {
        res.render("home", { title: "Home Page" });
    }
}
export default HomeController;
