import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="h-16 w-16 mx-auto object-contain"
      />
      <h2 className="font-bold text-xl text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-8">
        Select a project or get started with a new one
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
