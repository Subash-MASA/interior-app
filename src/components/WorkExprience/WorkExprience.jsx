import React from 'react'

function WorkExprience() {
  return (
    <div>
        <section class="services my-5 py-5" id="workexp">
		<div class="container">
			<div class="header-sec" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
				<h1>Work Exprience</h1>
			</div>
			<div class="row">
				<div class="col-lg-6 mt-4 col-md-6" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
					<div class="ser">
						<div class="ser-icon">
							<iconify-icon icon="material-symbols-light:model-training-outline-rounded"></iconify-icon>
						</div>
						<div class="ser-cont">
							<a href="https://www.wisright.com/" target='blank'>Wisright Technology</a>
							<p>Developer Trainee</p>
							<p><iconify-icon icon="formkit:date"></iconify-icon> Jan 2023 – Aug 2023</p>
							<p><iconify-icon icon="mdi:location"></iconify-icon> Chennai, Tamilnadu</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6 mt-4 col-md-6" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
					<div class="ser">
						<div class="ser-icon">
							<iconify-icon
								icon="material-symbols-light:developer-mode-tv-outline-rounded"></iconify-icon>
						</div>
						<div class="ser-cont">
							<a href="https://www.wisright.com/">Wisright Technology</a>
							<p>Developer</p>
							<p><iconify-icon icon="formkit:date"></iconify-icon> Sep 2023 – Present</p>
							<p><iconify-icon icon="mdi:location"></iconify-icon> Chennai, Tamilnadu</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default WorkExprience