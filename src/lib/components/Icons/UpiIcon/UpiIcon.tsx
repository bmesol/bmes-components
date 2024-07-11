import { IconProps, IconSizes, sizes } from "../DTOs";
import "../../../../styles/global.scss";
import React from "react";

const UpiIcon = ({ size = IconSizes.MD, onClick }: IconProps) => {
  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
      className={onClick && "cursor-pointer"}
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip702_8662">
          <rect
            id="UPIIcon"
            width="100.000000"
            height="100.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
        <pattern id="pattern_702_86580" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
          <use xlinkHref="#image702_8658_0" transform="matrix(0.01,0,0,0.01,0,0)" />
        </pattern>
        <image
          id="image702_8658_0"
          width="100.000000"
          height="100.000000"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAABUlJREFUeJztnF2sHVMYhp9TjlZDo6Tahkr0TxOJVNvUf3BUiSY0QUKiInXBZTUkuBAXLlwQSW9c+YsIEpGqiJ9TJ0hI6A9BRLVRmopoSp1DORzHdrH2dma+vfesWbNmbTvxPsm6WPub+d53Zu1ZM2vN2huEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHE/4FLgEai8jlwukfvvZr923y++EXAikgP3TgOuKNVmVZypzVpvABwNnClR297pIYvny++FtgCDET6sMwCXgPmhu74AemukAZwgUfPxmP9h+q14rdE+sgyD9jVRa+QWcCfpGuMMWCwQM/GQznR5Bv16BXFv2/WY1kM7O2kV6bLGjIGX8FdulXLepN/BJgo0LPxUHz5QuLzgPsivACch7viFnfSK9Mg/daf91rPxjcDSyt6uQ7XAHMK9LzsId/FnFXRTIsvM7kmgQU91GvQfjKtni/eAF6t4GMj7kqwuYIa9wyz84EKRrIsMPle6LHetx49XzxbrinpYQB4qEsOq+dlY4Gh2HKI9vFHSr0G8IRHzxfPlj24MUQRg8BTAX6895BU449R4FrgYI/0WsTeP7IsBTYVxE8AtgG3BfgpZAD4gTTf1G9of5RNqdcA/gZOLdArE//C5BwD5nc4d3OBHWbbr8g/Xls9L8sTnpwGcGGP9T726JWJX9oh7zNmvyXAPrPNR7irrUgPKO6y7OX6CHHjj3tMPvvNSq0X211tB94FtprPNzA10l4NvA8sysSHcWOZ5R49L2+Sb9GrQhMY3jD57BVi9dZG6vnyVY0vBMZNbBdwNa4Ly37+MjCjjuObDhzN7DwOzAxJEJiv3/R88cfIn9zWPSFb38JUDxR9fEMm+dshO1fI1296vvhs4DDtjdIqDwfm+5du9xA7HW4ThhZrYNijZ+Oh+PLFxo/gBnuWSeBO4N7AfF7sI1vdZZVHz8Zj/YfqlfEzSH5aZRy4saKfQk7GtXSqxviE/Iseq/cj5V+clfFv88XGs6xvbvMz7pG4ip8cnQJDRTtEMIG7VFsH0U1vBHeDrIovX2w8y1bcfNxluEfiKn6EEEKIvuN58k9TNyXOZ+N1lXHg0Qp+rvfUe0qnqeo5hXv48x0y+bJT1dNMvO7yW4njs34OMLUiZQD3imF2xeOP5lzyB7Q7cT4br7vYqXGfn5XNz29t1s9p1m8PPfC6xhu9XilipyLqxk5tlJ2qv7lLvee8Rf4bFHvC6s4Xqhc6VT/c/HwC97bw9WZ9EjgtmesuzMD1uS2zvwPH91G+KnozTfyoJ57dfzPwa6Z+V0LvHbmC/LcntruqO1+sni9uX80eMfUdIWbquIf0+v5RN7ErG213epKpryJ+sV8QO8l/I1YmzmfjdRefno3vLpHzweCzUJFTyE8tHybuqvPls/G6i0+vqp+9ZU9AbJf1X0+d183THj3rZ01JP9vKGji27IZdsP1r3a9eQ1YSxvAL8Bxwv0evip8XaV+SlIyvyV+aZybOZ+MLI/Vi/eynuKt6B7fipCcsMuL7EuerWy/WzxITt3Nrn9H+xOUlpj/ut5UidRPi5yDweKb+HbAO9649iJgG6bdfOtVNWT+juN+KLGvWx3CNEfvbliCOwa2eSPX4+RdutUY3PRtPfXyd/PyEm0a5mKnXAX+Q/icVHVlNusZoAB969Gy8bnx65+PGHzc06ytwj8MbYoWrdlnL/JtE8aSp92N3tQl4KVO/G3g2sa+uzAc+Jc1I+QHa/zFhxGx3ebIjK6e3zlMXQgghhBBCCCGEEEIIIYQQQgghhBBCCNEn/ANYanVPi+/d/QAAAABJRU5ErkJggg=="
        />
      </defs>
      <g clipPath="url(#clip702_8662)">
        <rect id="rect" width="100.000000" height="100.000000" fill="url(#pattern_702_86580)" fillOpacity="1.000000" />
      </g>
    </svg>
  );
};

export { UpiIcon, IconSizes };
