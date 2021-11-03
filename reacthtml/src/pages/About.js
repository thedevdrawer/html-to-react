import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "About | " + Config.SITE_TITLE;
const DESC = "Sample page about me.";
const CANONICAL = Config.SITE_DOMAIN + "/";
class About extends React.Component {
	render() {
		return (
			<main>
				<Helmet>
					<title>{TITLE}</title>
					<link rel="canonical" href={CANONICAL} />
					<meta name="description" content={DESC} />
					<meta name="theme-color" content={Config.THEME_COLOR} />
				</Helmet>
				<div class="container">
					<div class="row">
						<div class="col w-1">
							<div class="card">
								<h1 class="text-center">About Me</h1>
								<div class="row">
									<div class="col w-3 left">
										<img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="About Me" />
									</div>
									<div class="col w-9">
										<h2>
											Quid enim de amicitia statueris utilitatis causa expetenda
											vides.
										</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Scisse enim te quis coarguere possit? Equidem, sed
											audistine modo de Carneade? Quid ad utilitatem tantae
											pecuniae? Duo Reges: constructio interrete. Restinguet
											citius, si ardentem acceperit. Quae sequuntur igitur?{" "}
										</p>
										<p>
											Quis istud possit, inquit, negare?{" "}
											<i>Bonum integritas corporis: misera debilitas.</i> Immo
											alio genere;{" "}
											<i>Et ille ridens: Video, inquit, quid agas;</i> Diodorus,
											eius auditor, adiungit ad honestatem vacuitatem doloris.
											Numquam facies.{" "}
										</p>
										<h3>
											Verum hoc loco sumo verbis his eandem certe vim voluptatis
											Epicurum nosse quam ceteros.
										</h3>
										<p>
											Tamen a proposito, inquam, aberramus. Quid, si etiam
											iucunda memoria est praeteritorum malorum? Estne, quaeso,
											inquam, sitienti in bibendo voluptas?{" "}
										</p>
										<p>
											Multoque hoc melius nos veriusque quam Stoici. Hoc
											Hieronymus summum bonum esse dixit.{" "}
											<b>At iam decimum annum in spelunca iacet.</b> Quacumque
											enim ingredimur, in aliqua historia vestigium ponimus.
											Quarum ambarum rerum cum medicinam pollicetur, luxuriae
											licentiam pollicetur. Cur post Tarentum ad Archytam?{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default About;
