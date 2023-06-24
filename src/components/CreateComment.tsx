import { FC } from "react";

interface CreateCommentProps {}

const CreateComment: FC<CreateCommentProps> = ({}) => {
  return (
    <div className="grid w-full gap-1.5">
      <Label />
    </div>
  );
};

export default CreateComment;
