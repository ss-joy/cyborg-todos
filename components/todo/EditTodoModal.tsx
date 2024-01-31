import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { PenIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { UpdateContent } from "@/redux/todos/action-creators";
import { toast } from "sonner";
type EditTodoModalProps = {
  id: string;
};
function EditTodoModal({ id }: EditTodoModalProps) {
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }
  function updateContent() {
    toast.success("todo changed !!");
    dispatch(UpdateContent(id, content));
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="mx-1 bg-white hover:bg-white">
          <PenIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit your todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onChange={handleChange}
              value={content}
              id="username"
              defaultValue="@peduarte"
              className="col-span-4"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={updateContent}>
            Change !
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditTodoModal;
