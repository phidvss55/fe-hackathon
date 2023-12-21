import React from "react";

interface Props {
  referenceLink?: string;
  onClose: () => void;
}

const DocumentPopup: React.FC<Props> = ({ onClose, referenceLink }: Props) => {
  return (
    <div className="fixed top-0 right-0 z-[1000] flex h-full w-full justify-end bg-gray-900/50 backdrop-blur-sm">
      <div className="mx-auto my-[8vh] flex w-8/12 flex-col rounded-xl bg-gray-100 ease-in-out">
        <div className="flex flex-1 flex-col overflow-auto p-2">
          <div className="flex flex-col bg-white pb-10">
            <div className="p-10">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-bold leading-7 text-gray-900">
                  Course Reference Document
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Please refer to the documents below, they may be helpful.
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Link
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={referenceLink}
                        className="text-lg font-semibold text-[#0961DC] underline"
                      >
                        Refererence Link Document
                      </a>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Category
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      Technical
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Summary
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      Our online microcredentials are designed to upskill you
                      for work in rapidly-growing industries, without the time
                      and cost commitment of a full degree. They can be used as
                      an independent certification.
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Attachments
                    </dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          <div className="flex w-0 flex-1 items-center">
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <span className="truncate font-medium">
                                course_guide.pdf
                              </span>
                              <span className="flex-shrink-0 text-gray-400">
                                2.4mb
                              </span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="/"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Download
                            </a>
                          </div>
                        </li>
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          <div className="flex w-0 flex-1 items-center">
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <span className="truncate font-medium">
                                document-shipment.pdf
                              </span>
                              <span className="flex-shrink-0 text-gray-400">
                                4.5mb
                              </span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="/"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Download
                            </a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onClose()}
              className="text-zinc-900 w-[533px] max-w-full cursor-pointer items-center justify-center self-center rounded-lg bg-primary-green px-16 py-6 text-center text-2xl font-semibold text-white"
            >
              Return to Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DocumentPopup.defaultProps = {
  referenceLink: "",
};

export default DocumentPopup;
