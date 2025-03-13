import { Button } from "antd";
import Link from "next/link";

const dataSource = [
  {
    side: "server",
    link: "https://newerton.github.io/nextjs-ant-design-bundle-analyzer/analyze/nodejs.html",
  },
  {
    side: "client",
    link: "https://newerton.github.io/nextjs-ant-design-bundle-analyzer/analyze/client.html",
  },
];

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary">Button</Button>
      </div>

      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Side</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => (
            <tr key={index}>
              <td>{item.side}</td>
              <td>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
