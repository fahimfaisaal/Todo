import propTypes from 'prop-types';

export default function AddIcon({ addText }) {
  // Todo: add h-32 dynamic replace in add-icon class

  return (
    <div className="add-icon h-80">
      <svg className="cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-black dark:fill-gray-100" fillRule="evenodd" clipRule="evenodd" d="M20.0001 0C8.95434 0 0 8.95435 0 20C0 31.0457 8.95434 40.0002 20.0001 40.0002C31.0458 40.0002 40 31.0457 40 20C40 8.95435 31.0458 0 20.0001 0ZM2.86886 20C2.86886 10.5388 10.5388 2.86887 20.0001 2.86887C29.4613 2.86887 37.1311 10.5388 37.1311 20C37.1311 29.4612 29.4613 37.1314 20.0001 37.1314C10.5388 37.1314 2.86886 29.4612 2.86886 20ZM20.0004 9.43136C20.8343 9.43136 21.5104 10.1074 21.5104 10.9413V18.491H29.0599C29.894 18.491 30.5699 19.167 30.5699 20.0009C30.5699 20.8348 29.894 21.5108 29.0599 21.5108H21.5104V29.0605C21.5104 29.8943 20.8343 30.5704 20.0004 30.5704C19.1665 30.5704 18.4905 29.8943 18.4905 29.0605V21.5108H10.9408C10.1069 21.5108 9.4309 20.8348 9.4309 20.0009C9.4309 19.167 10.1069 18.491 10.9408 18.491H18.4905V10.9413C18.4905 10.1074 19.1665 9.43136 20.0004 9.43136Z" />
      </svg>

      <p className="font-roboto pt-2 dark:text-gray-100">{addText}</p>
    </div>
  );
}

AddIcon.propTypes = {
  addText: propTypes.string.isRequired,
};
