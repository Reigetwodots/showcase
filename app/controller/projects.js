const { Controller } = require("egg");

class ProjectController extends Controller {
	async index() {
		const { ctx } = this;
		ctx.body = "Project";
	}
}

module.exports = ProjectController;
