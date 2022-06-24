import type { PickerEmit } from "@/types";

export default (emit: PickerEmit) => {
  function cancel() {

  }

  function confirm() {

  }

  function closePicker() {
    emit("update:isShowPicker", false);
  }

  return {
    cancel,
    confirm,
    closePicker,
  }
}
