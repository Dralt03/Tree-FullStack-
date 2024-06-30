export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

export const seed: TreeNode = {
  id: "1",
  name: "1",
  children: [
    {
      id: "2",
      name: "1",
      children: [
        {
          id: "4",
          name: "2",
          children: [
            { id: "10", name: "1" },
            {
              id: "15",
              name: "25",
              children: [
                { id: "50", name: "32" },
                { id: "23", name: "1" },
              ],
            },
          ],
        },
        {
          id: "6",
          name: "4",
          children: [
            {
              id: "10",
              name: "1",
              children: [
                { id: "60", name: "1" },
                { id: "9324", name: "50" },
              ],
            },
            { id: "20", name: "20" },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "1",
      children: [
        {
          id: "5",
          name: "9",
        },
        {
          id: "10",
          name: "10",
        },
      ],
    },
  ],
};
