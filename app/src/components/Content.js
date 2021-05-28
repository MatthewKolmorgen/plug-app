import React, { useEffect, useState } from 'react';
import axios from 'axios';

// using components from my styled components here

import { Header, Media, Button, PayPer, Plugs } from './styledComponents';

const Content = () => {
	// Getting the data I will need from the given APi

	const [data, setData] = useState(null);
	const getData = () => {
		axios
			.get('https://www.plugco.in/public/take_home_sample_feed')
			.then((res) => {
				setData(res.data.campaigns);
			})
			.catch((err) => {
				console.log(err);
				setData('error');
			});
	};

	const copy = (link) => {
		navigator.clipboard.writeText(link);
	};

	// Closing loop

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			{/* Plugs/Error Messages/Loading during long wait time */}

			<Plugs>Plugs</Plugs>
			{data === null && <h1>Loading</h1>}
			{data === 'error' && <h1>Error Loading Page, Try Again Later</h1>}
			{data !== null &&
				data.map((cam, index) => {
					return (
						<div key={index}>
							{/* Displaying the Campaign to a Card */}

							<Header>
								<img src={cam['campaign_icon_url']} alt='Campaign Icon' />
								<div>
									<h3>{cam['campaign_name']}</h3>
									<PayPer>{cam['pay_per_install']} per instal</PayPer>
								</div>
							</Header>

							{/* Displayiung the media */}

							<Media>
								{cam.medias.map((content, mediaIndex) => {
									return (
										<div className='media' key={mediaIndex}>
											<img src={content['cover_photo_url']} alt='Cover Icon' />
											{content['media_type'] === 'video' && (
												<i id='play' className='fas fa-play'></i>
											)}

											{/* Download/Copy Buttons */}

											<Button>
												<button onClick={() => copy(content['tracking_link'])}>
													<i className='fal fa-link fa-flip-vertical'></i>{' '}
												</button>
												<button>
													<a href={content['download_url']} download>
														<i className='fal fa-arrow-to-bottom'></i>
													</a>
												</button>
											</Button>
										</div>
									);
								})}
							</Media>
						</div>
					);
				})}
		</div>
	);
};

export default Content;
