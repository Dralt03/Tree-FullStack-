import React from "react";
import { TreeNode } from "@/utils/tree";

interface TreeProps {
  node: TreeNode;
}

const Tree: React.FC<TreeProps> = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;
  return (
    <div className="flex flex-col mx-2 -my-3 -py-5 items-center">
      <div className="relative px-4 flex flex-col items-center mb-4">
        <div className="flex items-center justify-center w-12 h-8 bg-gray-700 border border-gray-400 rounded-full">
          {node.name}
        </div>
      </div>
      {hasChildren && (
        <div className="flex justify-around w-full">
          {node.children?.map((child) => (
            <div key={child.id} className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-gray-300"></div>
              <Tree node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;
