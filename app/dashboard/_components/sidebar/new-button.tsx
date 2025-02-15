"use client"

import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'


export const NewButton = ()=>{
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-square">
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-50 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
          <form
            action="
            "
          >
            <label htmlFor="">name</label>
            <input type="text" />
            <label htmlFor="">name</label>
            <input type="text" />
            <label htmlFor="">name</label>
            <input type="text" />
          </form>
        </DialogContent>
      </Dialog>
    )
}