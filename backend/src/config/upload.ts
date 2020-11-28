import multer from 'multer';
import path from 'path';

export default {
	storage: multer.diskStorage({
		destination: path.join(__dirname, '..', '..', 'uploads'),
		filename: (res, file, cb) => {
			const fileName = `${Date.now()}-${file.originalname
					.replace(/\s/g, '')
					.replace("(", "")
					.replace(")", "")}`;
			cb(null, fileName);
		}
	})
}