import React from 'react'
import Layer from "./Layer";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

const Management = () => {
  return (
    <>
      <section className="bg-gray-100 w-screen h-screen md:h-screen ">
        <div class="grid grid-cols-12">
          <div className="h-screen col-span-2">
            <Layer />
          </div>
          <div class="col-span-10 flex flex-wrap   z-10 p-5 w-full bg-gray-100">
            <Card className="w-full pt-5 rounded-none">
              <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="gray">
                  Team Management
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input
                  className="bg-white placeholder-gray-900"
                  placeholder="Name"
                  size="lg"
                />
                <Input
                  className="bg-white placeholder-gray-900"
                  placeholder="Designation"
                  size="lg"
                />
                <Input
                  className="bg-white placeholder-gray-900"
                  placeholder="Bio"
                  size="lg"
                />
                <Input
                  className="bg-white placeholder-gray-900"
                  placeholder="Row"
                  size="lg"
                />
                <Input
                  className="bg-white placeholder-gray-900"
                  placeholder="Serial"
                  size="lg"
                />

                <Card className="w-full max-w-[24rem]">
                  <List className="flex-row">
                    <ListItem className="p-0">
                      <label
                        htmlFor="horizontal-list-react"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Checkbox
                            id="horizontal-list-react"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-0",
                            }}
                          />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-medium">
                          Active
                        </Typography>
                      </label>
                    </ListItem>
                    <ListItem className="p-0">
                      <label
                        htmlFor="horizontal-list-vue"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Checkbox
                            id="horizontal-list-vue"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-0",
                            }}
                          />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-medium">
                          Inactive
                        </Typography>
                      </label>
                    </ListItem>
                  </List>
                </Card>

                <input
                  class="block w-full text text-gray-900 mb-5 p-3 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                />
                <Button className="h-10 w-20 flex justify-center items-center mx-auto text-gray-900">
                  Save
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Management