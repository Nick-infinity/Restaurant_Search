import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer 7sfN3uNlxWNnEdc7n2_HGrvBHecceN1Rq_G7iuTy760xbtqdw0uQtO9QjjiVl0rj6GuNc8Emncvp2Lj_44lEdzf1IoAgC5nIFuEChMLP9uOCB8VPxZXiDMpzYxqEYHYx',
	},
});
