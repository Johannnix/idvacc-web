import type { Metadata } from "next"

interface Docs {
  name: string,
  filename: string
}

export const metadata: Metadata = {
  title: `ATC Documents`,
}

const docsConstant: Docs[] = [
  {
    name: "Indonesia vACC ATC General SOP 2024",
    filename: "idvacc_atc_sop.pdf"
  },
  {
    name: "ATC Guide",
    filename: "atc_guide.pdf"
  }
]

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-3 min-h-dvh">
      <div className="text-center">
        <h1 className="text-xl font-bold md:text-3xl">ATC Documents</h1>
        <p className="text-sm">Here is a list of ATC Documents can be accessed below</p>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        {docsConstant &&
          docsConstant.map(({name, filename}: Docs, idx) => {
            return (
              <DocumentsData name={name} filename={filename} key={idx} />
            )
          })
        }
      </div>
    </div>
  )
}

const DocumentsData = ({name, filename}: Docs) => {
  return (
    <a download href={`./${filename}`}>
      <div className="p-4 mx-24 border-2 border-white rounded-lg hover:bg-[#afafaf] transition hover:text-black font-semibold hover:cursor-pointer">
        {name}
      </div>
    </a>
  )
}